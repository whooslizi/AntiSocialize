chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['isBlocking', 'blockedSites'], (data) => {
    if (data.isBlocking === undefined) {
      chrome.storage.local.set({ 
        isBlocking: false, 
        blockingMode: 'infinite',
        blockedSites: ['facebook.com', 'tiktok.com', 'instagram.com', 'youtube.com', 'reddit.com'],
        startTime: Date.now(),
        stats: { attempts: 0, bypassed: 0 }
      });
    }
  });
});
