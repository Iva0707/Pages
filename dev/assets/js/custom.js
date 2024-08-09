  //___________header______________

const burger = document.getElementById('burger')
let menu = document.getElementById('menu')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        menu.innerHTML = (`  
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Pages</a>
                    <a href="#">Contact Us</a>
                    
                    <div class="media_cont">
                        <a href="#">
                            <img src="assets/img/header_face.svg" alt="media" class="media_item">
                        </a>
                        <a href="#">
                            <img src="assets/img/header_twit.svg" alt="media" class="media_item">
                        </a>
                        <a href="#">
                            <img src="assets/img/header_in.svg" alt="media" class="media_item">
                        </a>
                    </div>
                    
                    <button class="btn">Order Today</button>`)
        menu.classList.add('show')
        body.classList.add('overflow_hidden')
    } else {
        closeMenu ()

    }
})

document.addEventListener('click', (event) => {
    const clickOnMenu = menu.contains(event.target)
    const clickOnBurger = burger.contains(event.target)
    if (!clickOnMenu && !clickOnBurger) {
        closeMenu ()
    }
})

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
        closeMenu ()
    }
})

function closeMenu () {
    menu.innerHTML = (`          
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Pages</a>
        <a href="#">Contact Us</a>`)
    menu.classList.remove('show')
    body.classList.remove('overflow_hidden')
    burger.classList.remove('active')
}