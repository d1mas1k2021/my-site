


function checkForm() {
    for (let i = 0; i < popupInput.length; i++) {
        popupInput[i].value = localStorage.getItem(popupInput[i].type)
    }

    for (let i =0; i < popupInput.length; i++) {
        popupInput[i].addEventListener('change', el => {
            localStorage.setItem(el.target.type, el.target.value)
        })
    }
}

checkForm()




function checkPopup() {
    if (localStorage.getItem('popupOpen')) {
        popup.classList.add('popup__active')
        popupBody.classList.add('popup__body-active')
    }
}

checkPopup()



form.addEventListener('submit', e => {
    popupInput.forEach(el => {
        localStorage.removeItem(el.type)
    })

})
