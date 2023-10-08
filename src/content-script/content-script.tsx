import ReactDOM from 'react-dom/client'

import { Popup } from 'popup/popup'

import { Message } from 'common/const'
import { Utils } from 'common/utils'

import './content-script.css'

console.log('content script')

let isOpenPopup: boolean = false

chrome.runtime.onMessage.addListener(async function (message): Promise<void> {
  if (message.type === 'PARSE_PAGE') {
    console.log('parse page script')
  }
})

chrome.runtime.onMessage.addListener(
  (message: { type: Message }, sender: chrome.runtime.MessageSender, sendResponse): void => {
    if (message.type === Message.TOGGLE_EXTENSION) {
      toggleIsOpenPopup()
      sendResponse('Response from content script')
    }
  },
)

const handleClosePopup = (): void => {
  const dialog: HTMLDialogElement = document.querySelector('dialog')
  dialog.close()
  isOpenPopup = !isOpenPopup
}

// If the extension is closed, it will be open if not closed
const toggleIsOpenPopup = (): void => {
  if (!isOpenPopup) {
    const modal: HTMLDialogElement = document.createElement('dialog')
    modal.classList.add('dialog-container')

    const popupContainer: HTMLDivElement = document.createElement('div')
    modal.appendChild(popupContainer)
    document.body.appendChild(modal)
    const root: ReactDOM.Root = ReactDOM.createRoot(popupContainer)

    root.render(<Popup onClose={handleClosePopup} />)
    const dialog: HTMLDialogElement = document.querySelector('dialog')
    dialog.showModal()
    Utils.handleClickOutsidePopup(dialog, (): void => {
      dialog.close()
      isOpenPopup = !isOpenPopup
    })
    isOpenPopup = !isOpenPopup
  } else handleClosePopup()
}
