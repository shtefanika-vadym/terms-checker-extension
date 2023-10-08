import { Message } from 'common/const'

console.log('background')

chrome.webNavigation.onCommitted.addListener((details) => {
  console.log(details)
  if (['reload', 'link'].includes(details.transitionType)) {
    chrome.tabs.sendMessage(details.tabId, { type: 'PARSE_PAGE' }, (response) => {
      console.log('response, onCommitted')
    })
  }
})

chrome.action.onClicked.addListener(async (tab: chrome.tabs.Tab): Promise<void> => {
  chrome.tabs.sendMessage(tab.id, { type: Message.TOGGLE_EXTENSION }, (response): void => {
    console.log('Received response from content script:', response)
    if (!response) {
      chrome.tabs.reload(tab.id)
    }
  })
})
