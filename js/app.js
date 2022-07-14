// Navigation
// Ссылки
const linkGlav = document.querySelectorAll('.header__link')[0]
const linkSummary = document.querySelectorAll('.header__link')[1]
const linkPortfolio = document.querySelectorAll('.header__link')[3]
const linkShop = document.querySelectorAll('.header__link')[2]
const linkAbout = document.querySelectorAll('.header__link')[4]

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

// Обо мне
const aboutMy = document.querySelector('.tab')
linkAbout.addEventListener('click', e => {
    e.preventDefault()
    aboutMy.scrollIntoView({
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



// Слайдер
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        infinite: true,
        dots: false,
        infinite: false,
        slidesToScroll: 1,

    })
})



// footer
// Navigation
const linkGlav2 = document.querySelectorAll('.footer__link')[0]
const linkSummary2 = document.querySelectorAll('.footer__link')[1]
const linkPortfolio2 = document.querySelectorAll('.footer__link')[3]
const linkShop2 = document.querySelectorAll('.footer__link')[2]
const linkAbout2 = document.querySelectorAll('.footer__link')[4]

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
// Обо мне
linkAbout2.addEventListener('click', e => {
    e.preventDefault()
    aboutMy.scrollIntoView({
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
    localStorage.setItem('popupOpen', true)

})

// Закрытие окна
closePopup.addEventListener('click', el => {
    el.preventDefault()
    popup.classList.remove('popup__active')
    popupBody.classList.remove('popup__body-active')
    localStorage.removeItem('popupOpen')
    popupInput.forEach(el => {
        el.classList.remove('popup__input_error')
    })
})

// Закрытие на фон
document.addEventListener('click', el => {
    if (el.target === popup) {
        popup.classList.remove('popup__active')
        popupBody.classList.remove('popup__body-active')
        localStorage.removeItem('popupOpen')
        popupInput.forEach(el => {
            el.classList.remove('popup__input_error')
        })
    }
})



// Валидация формы

const form = document.querySelector('.popup__form')
const popupInput = document.querySelectorAll('.popup__input')

form.addEventListener('submit', e => {
    
    popupInput.forEach(el => {
        if (el.value.length === 0) {
            el.classList.add('popup__input_error')
            e.preventDefault()
        } else {
            el.classList.remove('popup__input_error')
        }
    })

    // Почта
    reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!reg1.test(popupInput[1].value)) {
        e.preventDefault()
        popupInput[1].classList.add('popup__input_error')
    } else {
        popupInput[1].classList.remove('popup__input_error')
    }

    // Телефон
    const reg2 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    if (!reg2.test(popupInput[2].value)) {
        e.preventDefault()
        popupInput[2].classList.add('popup__input_error')
    } else {
        popupInput[2].classList.remove('popup__input_error')
    }

})



// Таб

const tabButton = document.querySelectorAll('.tab__button')
const tabText = document.querySelectorAll('.tab__text')

tabButton.forEach((el, index) => {
    el.addEventListener('click', () => {
        tabButton.forEach(e => e.classList.remove('tab__button_active'))
        tabText.forEach(e => e.classList.remove('tab__text_active'))

        tabButton[index].classList.add('tab__button_active')
        tabText[index].classList.add('tab__text_active')
        localStorage.setItem('tabOpen', tabButton[index].getAttribute('index'))
        // const getLST = localStorage.getItem('tabOpen')
        // hasOpenTag(getLST)
    })
})


// LocalStorage for tab

function hasOpenTag() {
    const getLST = localStorage.getItem('tabOpen')

    tabButton.forEach(e => {
        if (e.getAttribute('index') === getLST) {
            tabButton.forEach(e => e.classList.remove('tab__button_active'))
            e.classList.add('tab__button_active')
        }
    })

    tabText.forEach(e => {
        if (e.getAttribute('index') === getLST) {
            tabText.forEach(e => e.classList.remove('tab__text_active'))
            e.classList.add('tab__text_active')
        }
    })
}

hasOpenTag()


