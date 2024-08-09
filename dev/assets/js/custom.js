  //___________header______________

const burger = document.getElementById('burger')
let menu = document.getElementById('menu')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        menu.innerHTML = (`  
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
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
                    
                    <div class="btn_row">
                        <button class="btn">Order Today</button>
                    </div>`)
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

function resize () {
    const screenWidth = window.innerWidth
    if (screenWidth > 1024) {
        closeMenu ()
    }
}
window.addEventListener('resize', resize)
resize()

function closeMenu () {
    menu.innerHTML = (`          
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Contact Us</a></li>`)
    menu.classList.remove('show')
    body.classList.remove('overflow_hidden')
    burger.classList.remove('active')
}
