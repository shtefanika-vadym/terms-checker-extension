const handleClickOutsidePopup = (element: HTMLElement, onClickOutside: () => void) => {
  const outsideClickListener = (event: any) => {
    if (event.target.classList.contains('dialog-container')) {
      onClickOutside()
      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const Utils = {
  capitalizeFirstLetter,
  handleClickOutsidePopup,
}
