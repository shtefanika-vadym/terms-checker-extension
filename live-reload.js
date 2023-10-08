const RELOAD_DOMAINS = ['localhost:5000']
const ReloadTabKey = 'reloadTabId'
const PrevTabReloadDomain = 'prevTabReloadDomain'

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && RELOAD_DOMAINS.find((url) => tab.url.includes(url))) {
    chrome.tabs.query({ lastFocusedWindow: true, active: true }, function (tabArray) {
      chrome.storage.sync.set({ [ReloadTabKey]: tabArray[0] }, function () {
        chrome.runtime.reload()
      })
    })
  }
})

chrome.storage.sync.get(ReloadTabKey, function (data) {
  const tab = data[ReloadTabKey]
  if (!tab) return
  chrome.storage.sync.get([PrevTabReloadDomain], function (data) {
    if (RELOAD_DOMAINS.find((url) => tab.url.includes(url))) {
      if (!data || !data[PrevTabReloadDomain]) {
        chrome.storage.sync.set({ [PrevTabReloadDomain]: true })
        chrome.tabs.reload(tab.id)
      }
    } else {
      chrome.tabs.reload(tab.id)
    }
    if (data && data[PrevTabReloadDomain]) {
      setTimeout(() => {
        chrome.storage.sync.set({ [PrevTabReloadDomain]: false })
      }, 500)
    }
  })
})
