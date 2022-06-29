
function toogleMenu() {
  const menu = document.querySelector('[data-js="menu"')
  const sideHover = document.querySelector('[data-js="sideHover"')

  const hoverCenter = document.querySelectorAll('[data-js="hoverCenter"')
  const hover = document.querySelectorAll('[data-js="hover"')

  function menuClick() {
    for (const elem of hoverCenter) {
      elem.classList.toggle('hover-center')
    }

    for (const elem of hover) {
      elem.classList.toggle('hover')
    }

    sideHover.classList.toggle('side-hover')
  }
  menu.addEventListener('click', menuClick)
}

toogleMenu()
