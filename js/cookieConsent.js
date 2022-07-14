// window.addEventListener('DOMContentLoaded', () => {

//     const cookieStorage = {
//         getItem: (key) => {
//             const cookie = document.cookie
//                 .split(';')
//                 .map(cookie => cookie.split('='))
//                 .reduce((acc, [key, value]) => ({...acc, [key.trim()] : value}), {})
//             return cookie[key]
//         },
//         setItem: (key, value) => {
//             document.cookie = `${key}=${value}; expires=Sun, 16 Jul 3567 06:23:41 GMT`
//         }
//     }








//     const storageType = cookieStorage
//     const consentPropertyType = 'site-consent'
    
//     const hasConsented = () => storageType.getItem(consentPropertyType) === 'true' ? true : false
//     const toggleStorage = (prop) => storageType.setItem(consentPropertyType, prop)
    
//     const cookiePopup = document.querySelector('.cookie')
//     const cookieBtnCancel = document.querySelector('[data-cancel]')
//     const cookieBtnConfirm = document.querySelector('[data-confirm]')



//     if (hasConsented()) {
//         // Script
//     } else {
//         cookiePopup.classList.add('cookie_open')
//     }

//     cookieBtnConfirm.addEventListener('click', () => {
//         toggleStorage(true)
//         cookiePopup.classList.remove('cookie_open')

//     })

//     cookieBtnCancel.addEventListener('click', () => {
//         toggleStorage(false)
//         cookiePopup.classList.remove('cookie_open')

//     })
// })

window.addEventListener('DOMContentLoaded', () => {
    const cookie = {
        getItem: (key => {
           const cookueObj = document.cookie
                            .split(';')
                            .map(el => el.split('='))
                            .reduce((acc, [key, value]) => {
                                acc[key.trim()] = value
                                return acc
                            }, {})
           return cookueObj[key]
        }),
        setItem: ((key, value) => {
            return document.cookie = `${key}=${value}; expires=Sun, 16 Jul 3567 06:23:41 GMT`
        })
    }

    const cookieStorage = cookie
    const consentPropertyType = 'site-cookie'

    const cookiePopup = document.querySelector('.cookie')
    const cookieBtnCancel = document.querySelector('[data-cancel]')
    const cookieBtnConfirm = document.querySelector('[data-confirm]')

    const hasProperties = cookieStorage.getItem(consentPropertyType) === 'true' ? true : false
    const addCookie = prop =>  cookieStorage.setItem(consentPropertyType, prop)

    if (!hasProperties) {
        cookiePopup.classList.add('cookie_open')
        cookieBtnCancel.addEventListener('click', el => {
            cookiePopup.classList.remove('cookie_open')
            addCookie(false)
        })
        cookieBtnConfirm.addEventListener('click', el => {
            cookiePopup.classList.remove('cookie_open')
            addCookie(true)
        })
        
    }

})