document.addEventListener('DOMContentLoaded', async () => {
  const data = await chrome.storage.local.get([
    'blockedSites', 'blockingMode', 'timerEnd', 
    'isBlocking', 'stats', 'startTime'
  ]);

  const blockedSites = data.blockedSites || ['facebook.com', 'tiktok.com', 'instagram.com'];
  let currentMode = data.blockingMode || 'infinite';
  let isBlocking = data.isBlocking || false;

  const siteList = document.getElementById('site-list');
  const checkboxes = siteList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    if (blockedSites.includes(cb.value)) cb.checked = true;
    cb.addEventListener('change', saveSites);
  });

  const customInput = document.getElementById('custom-domain');
  document.getElementById('btn-add-domain').addEventListener('click', () => {
    const val = customInput.value.trim().toLowerCase();
    if (val && !blockedSites.includes(val)) {
      const label = document.createElement('label');
      label.className = 'site-item';
      label.innerHTML = \`<input type="checkbox" value="\${val}" checked> \${val}\`;
      label.querySelector('input').addEventListener('change', saveSites);
      siteList.appendChild(label);
      saveSites();
      customInput.value = '';
    }
  });

  function saveSites() {
    const checked = Array.from(siteList.querySelectorAll('input:checked')).map(cb => cb.value);
    chrome.storage.local.set({ blockedSites: checked });
  }
  
  if (!data.blockedSites) saveSites();

  const modeInfinite = document.getElementById('mode-infinite');
  const modeTimer = document.getElementById('mode-timer');
  const timerSettings = document.getElementById('timer-settings');
  const timerInput = document.getElementById('timer-input');

  function setMode(mode) {
    if (isBlocking) return; // Cannot change mode while blocking
    currentMode = mode;
    modeInfinite.classList.toggle('active', mode === 'infinite');
    modeTimer.classList.toggle('active', mode === 'timer');
    timerSettings.style.display = mode === 'timer' ? 'block' : 'none';
    chrome.storage.local.set({ blockingMode: mode });
  }

  const presetBtns = document.querySelectorAll('.preset-btn');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      timerInput.value = e.target.getAttribute('data-time');
      presetBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  timerInput.addEventListener('input', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
  });

  modeInfinite.addEventListener('click', () => setMode('infinite'));
  modeTimer.addEventListener('click', () => setMode('timer'));
  setMode(currentMode);

  const btnStart = document.getElementById('btn-start');
  const btnStop = document.getElementById('btn-stop');
  const statusBadge = document.getElementById('status-badge');

  function updateTimeDisplay() {
    if (!isBlocking) return;
    
    chrome.storage.local.get(['timerEnd', 'startTime'], (d) => {
      if (currentMode === 'timer' && d.timerEnd) {
        const left = Math.ceil((d.timerEnd - Date.now()) / 60000);
        if (left > 0) {
          statusBadge.textContent = \`Active (\${left}m left)\`;
        } else {
          stopBlocking();
        }
      } else if (currentMode === 'infinite' && d.startTime) {
        const passedMins = Math.floor((Date.now() - d.startTime) / 60000);
        statusBadge.textContent = \`Active (Count up: \${passedMins}m)\`;
      }
    });
  }

  function updateUI() {
    if (isBlocking) {
      statusBadge.className = 'status-badge status-active';
      btnStart.style.display = 'none';
      btnStop.classList.add('visible');
      modeInfinite.style.pointerEvents = 'none';
      modeTimer.style.pointerEvents = 'none';
      updateTimeDisplay();
    } else {
      statusBadge.textContent = 'Inactive';
      statusBadge.className = 'status-badge status-inactive';
      btnStart.style.display = 'block';
      btnStop.classList.remove('visible');
      modeInfinite.style.pointerEvents = 'auto';
      modeTimer.style.pointerEvents = 'auto';
    }
  }

  btnStart.addEventListener('click', () => {
    isBlocking = true;
    const saveObj = { isBlocking: true, startTime: Date.now() };
    
    if (currentMode === 'timer') {
      const mins = parseInt(timerInput.value) || 30;
      saveObj.timerEnd = Date.now() + mins * 60000;
    }
    
    chrome.storage.local.set(saveObj, () => {
      updateUI();
    });
  });

  const stopModal = document.getElementById('stop-modal');
  const popupQText = document.getElementById('popup-question-text');
  const popupOptions = document.getElementById('popup-options');
  const popupErrorMsg = document.getElementById('popup-error-msg');
  let currentPopupQuestion = null;

  btnStop.addEventListener('click', () => {
    if (currentMode === 'timer') {
      // Show question modal
      stopModal.style.display = 'flex';
      popupErrorMsg.innerText = '';
      currentPopupQuestion = getRandomQuestion(); // From questions.js
      popupQText.innerText = currentPopupQuestion.question;
      popupOptions.innerHTML = '';
      
      const letters = ['A', 'B', 'C', 'D'];
      currentPopupQuestion.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'antisocialize-option';
        btn.style.padding = '12px';
        btn.style.fontSize = '16px';
        btn.style.background = '#222';
        btn.style.color = 'white';
        btn.style.border = '1px solid #444';
        btn.style.borderRadius = '8px';
        btn.style.cursor = 'pointer';
        btn.style.textAlign = 'left';
        btn.innerText = \`\${letters[index]}. \${opt}\`;
        
        btn.addEventListener('mouseover', () => btn.style.background = '#333');
        btn.addEventListener('mouseout', () => btn.style.background = '#222');

        btn.addEventListener('click', () => {
          if (index === currentPopupQuestion.correct) {
            stopModal.style.display = 'none';
            stopBlocking();
          } else {
            popupErrorMsg.innerText = "Sai roi! Hoc lai di.";
          }
        });
        popupOptions.appendChild(btn);
      });
    } else {
      // Infinite mode, stop immediately
      stopBlocking();
    }
  });

  document.getElementById('btn-stop-cancel').addEventListener('click', () => {
    stopModal.style.display = 'none';
  });

  function stopBlocking() {
    isBlocking = false;
    chrome.storage.local.set({ isBlocking: false, timerEnd: null, startTime: null }, updateUI);
  }

  const stats = data.stats || { attempts: 0, bypassed: 0 };
  document.getElementById('stat-attempts').innerText = stats.attempts;
  document.getElementById('stat-bypassed').innerText = stats.bypassed;

  setInterval(() => {
    if (isBlocking) {
      updateTimeDisplay();
    }
  }, 10000); // update every 10 seconds

  updateUI();
});
