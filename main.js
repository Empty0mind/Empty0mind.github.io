const firstScreen = document.querySelector('.first-screen')
const secondScreen = document.querySelector('.second-screen')
const thirdScreen = document.querySelector('.third-screen')
const inicioSesion = document.querySelector('.inicio-sesion')
const logo = document.querySelector('.user-icon')
const text = document.querySelector('.parrafo')
const closeIcon = document.querySelector('.close-icon')
const close = document.querySelector('.close')
const menuBars = document.querySelector('.menu-bars')
const firstSection = document.querySelector('.first-section')

firstScreen.classList.remove('inactive')

menuBars.addEventListener('click', menuUserBars)
close.addEventListener('click', secondClose)
closeIcon.addEventListener('click', viewClose)
logo.addEventListener('click', userMenu)

function userMenu() {
    console.log('click');

    const quitScreen =  firstScreen.classList.contains('inactive')

    if(!quitScreen) {
        firstScreen.classList.add('inactive')
    }
    inicioSesion.classList.remove('inactive')
    secondScreen.classList.remove('inactive')

}


function viewClose() {

    if(closeIcon.addEventListener = true) {

        location.reload()  
    }
}

function secondClose() {
    location.reload()
}

function menuUserBars(viewClose) {

    firstScreen.classList.add('inactive')
    text.classList.add('inactive')

    inicioSesion.classList.remove('inactive')
    thirdScreen.classList.remove('inactive')
    firstSection.classList.remove('inactive')

}

