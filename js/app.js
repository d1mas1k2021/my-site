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
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
    })
})
// Портфолио
const portfolio = document.querySelector('.works')
linkPortfolio.addEventListener('click', e => {
    e.preventDefault()
    portfolio.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
    })
})
// Магазин

linkShop.addEventListener('click', e => {
    e.preventDefault()
    summary.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
    })
})

