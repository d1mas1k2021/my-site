// Navigation
// Ссылки
const linkGlav = document.querySelectorAll('.link')[0]
const linkSummary = document.querySelectorAll('.link')[1]
const linkPortfolio = document.querySelectorAll('.link')[2]
const linkShop = document.querySelectorAll('.link')[3]

// Резюме
const summary = document.querySelector('.information')
linkSummary.addEventListener('click', e => {
    e.preventDefault()
    summary.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})
// Портфолио
const portfolio = document.querySelector('.works')
linkPortfolio.addEventListener('click', e => {
    e.preventDefault()
    portfolio.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})
// Магазин
const shop = document.querySelector('.shop')
linkShop.addEventListener('click', e => {
    e.preventDefault()
    shop.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})

// button
const button = document.querySelector('.header__content-button')
button.addEventListener('click', e => {
    e.preventDefault()
    summary.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})



$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        infinite: true,
        dots: false,
        infinite:false,
        slidesToScroll: 1,
        
    })
})

// footer
// Navigation
const linkGlav2 = document.querySelectorAll('.link-li .link')[0]
const linkSummary2 = document.querySelectorAll('.link-li .link')[1]
const linkPortfolio2 = document.querySelectorAll('.link-li .link')[3]
const linkShop2 = document.querySelectorAll('.link-li .link')[2]


// Главная
const header = document.querySelector('.header')
linkGlav2.addEventListener('click', e => {
    e.preventDefault()
    header.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})
// Резюме
linkSummary2.addEventListener('click', e => {
    e.preventDefault()
    summary.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})
// Портфолио
linkPortfolio2.addEventListener('click', e => {
    e.preventDefault()
    portfolio.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})
// Магазин
linkShop2.addEventListener('click', e => {
    e.preventDefault()
    shop.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
})


// Popup

const popup = document.querySelector('.popup')
const popupBody = document.querySelector('.popup__body')
const closePopup = document.querySelector('.popup__close')
const registerLink = document.querySelector('.header__register_link')

// Открытие окна
registerLink.addEventListener('click', el => {
    el.preventDefault()
    popup.classList.add('popup__active')
    popupBody.classList.add('popup__body-active')

})

// Закрытие окна
closePopup.addEventListener('click', el => {
    el.preventDefault()
    popup.classList.remove('popup__active')
    popupBody.classList.remove('popup__body-active')

})

// Закрытие на фон
document.addEventListener('click', el => {
    if (el.target === popup) {
        popup.classList.remove('popup__active')
        popupBody.classList.remove('popup__body-active')
    }
})


