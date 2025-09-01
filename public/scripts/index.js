let $ = document
const openMenuBtn = $.querySelector('.open-menu')
const mobileMenu = $.querySelector('.mobile-menu')
const cover = $.querySelector('.cover')
const closeBtn=$.querySelector('.close-btn')

function openMenu() {
    mobileMenu.classList.remove('-right-64')
    mobileMenu.classList.add('right-0')
    cover.classList.toggle('invisible')
    cover.classList.toggle('opacity-0')
}

function closeMenu() {
    mobileMenu.classList.add('-right-64')
    mobileMenu.classList.remove('right-0')
    cover.classList.toggle('invisible')
    cover.classList.toggle('opacity-0')
}

closeBtn.addEventListener('click',closeMenu)
cover.addEventListener('click',closeMenu)
openMenuBtn.addEventListener('click', openMenu)


