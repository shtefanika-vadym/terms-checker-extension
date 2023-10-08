console.log('content script')

chrome.runtime.onMessage.addListener(async function (message) {
  if (message.type === 'PARSE_PAGE') {
    console.log('parse page script')
  }
})
