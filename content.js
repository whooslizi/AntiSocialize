let currentQuestion = null;
let rageLevel = 0;
let bypassAttempts = 0;
let overlayElement = null;
let lockInterval = null;

async function init() {
  const data = await chrome.storage.local.get(['blockedSites', 'blockingMode', 'timerEnd', 'stats', 'activeBypass']);
  
  const domain = window.location.hostname;
  const isBlocked = (data.blockedSites || []).some(site => domain.includes(site));
  
  if (!isBlocked) return;

  const now = Date.now();

  if (data.activeBypass && data.activeBypass.domain === domain && data.activeBypass.expiry > now) {
    return;
  }

  if (data.blockingMode === 'timer') {
    if (!data.timerEnd || now > data.timerEnd) {
      return; 
    }
  }

  injectOverlay();
}

function injectOverlay() {
  if (document.getElementById('antisocialize-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'antisocialize-overlay';
  overlayElement = overlay;

  const roast = getRandomRoast();
  const subtext = getRandomJudge();
  const memeUrl = getRandomMemeGif();

  overlay.innerHTML = `
    <img id="antisocialize-meme" src="${memeUrl}" />
    <div id="antisocialize-text">${roast}</div>
    <div id="antisocialize-subtext">${subtext}</div>
    <div class="antisocialize-btn-container">
      <button id="antisocialize-btn-back" class="antisocialize-btn">Quay lai hoc tiep</button>
      <button id="antisocialize-btn-bypass" class="antisocialize-btn">Tao van muon vao</button>
    </div>

    <div id="antisocialize-modal">
      <div id="antisocialize-question-text"></div>
      <div id="antisocialize-options"></div>
      
      <div id="antisocialize-punishment">
        <h2 id="antisocialize-punish-text"></h2>
        <div id="antisocialize-lock-timer">30</div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add('antisocialize-no-scroll');

  document.getElementById('antisocialize-btn-back').addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  });

  document.getElementById('antisocialize-btn-bypass').addEventListener('click', () => {
    showCalculusChallenge();
  });

  setTimeout(() => {
    SoundFX.vineBoom();
  }, 100);
}

function showCalculusChallenge() {
  bypassAttempts++;
  updateStats('attempts');

  document.getElementById('antisocialize-meme').style.display = 'none';
  document.getElementById('antisocialize-text').style.display = 'none';
  document.getElementById('antisocialize-subtext').style.display = 'none';
  document.querySelector('.antisocialize-btn-container').style.display = 'none';
  
  const modal = document.getElementById('antisocialize-modal');
  modal.style.display = 'block';

  currentQuestion = getRandomQuestion();
  
  document.getElementById('antisocialize-question-text').innerText = currentQuestion.question;
  
  const optionsContainer = document.getElementById('antisocialize-options');
  optionsContainer.innerHTML = '';
  
  const letters = ['A', 'B', 'C', 'D'];
  currentQuestion.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'antisocialize-option';
    btn.innerText = `${letters[index]}. ${opt}`;
    btn.addEventListener('click', () => handleAnswer(index));
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  if (selectedIndex === currentQuestion.correct) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }
}

function handleCorrectAnswer() {
  SoundFX.victory();
  const domain = window.location.hostname;
  const expiry = Date.now() + 5 * 60 * 1000;
  
  chrome.storage.local.set({ activeBypass: { domain, expiry } });
  updateStats('bypassed');
  
  document.body.classList.remove('antisocialize-no-scroll');
  overlayElement.remove();
}

function handleWrongAnswer() {
  SoundFX.bonk();
  setTimeout(() => SoundFX.errorBuzz(), 300);

  rageLevel++;
  if (rageLevel >= 2) {
    overlayElement.classList.add('antisocialize-rage-' + Math.min(rageLevel, 3));
    if (rageLevel > 2) SoundFX.siren();
  }

  const punishScreen = document.getElementById('antisocialize-punishment');
  const punishText = document.getElementById('antisocialize-punish-text');
  const timerDisplay = document.getElementById('antisocialize-lock-timer');
  
  punishScreen.style.display = 'flex';
  punishScreen.classList.add('antisocialize-shake-anim');
  punishText.innerText = getRandomItem(PUNISHMENT_MESSAGES);
  
  let timeLeft = 30;
  timerDisplay.innerText = timeLeft;
  
  if (lockInterval) clearInterval(lockInterval);
  
  lockInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(lockInterval);
      punishScreen.style.display = 'none';
      punishScreen.classList.remove('antisocialize-shake-anim');
      
      const modal = document.getElementById('antisocialize-modal');
      modal.style.display = 'none';
      
      document.getElementById('antisocialize-meme').style.display = 'block';
      document.getElementById('antisocialize-text').style.display = 'block';
      document.getElementById('antisocialize-subtext').style.display = 'block';
      document.querySelector('.antisocialize-btn-container').style.display = 'flex';
      
      document.getElementById('antisocialize-text').innerText = getRandomRoast();
      document.getElementById('antisocialize-meme').src = getRandomMemeGif();
    }
  }, 1000);
}

function updateStats(type) {
  chrome.storage.local.get(['stats'], (data) => {
    let stats = data.stats || { attempts: 0, timeWasted: 0, bypassed: 0, streak: 0 };
    if (type === 'attempts') stats.attempts++;
    if (type === 'bypassed') stats.bypassed++;
    chrome.storage.local.set({ stats });
  });
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
