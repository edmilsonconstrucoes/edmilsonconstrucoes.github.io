function menuHandler() {
    let button = document.querySelector(".menu-button");
    let menuNav = document.querySelector(".menu-nav");
    
    let topHamburger = document.getElementById('top-hamburger')
    let middleHamburger = document.getElementById('middle-hamburger')
    let bottomHamburger = document.getElementById('bottom-hamburger')

    button.addEventListener('click', () => {
        menuNav.classList.toggle("active")

        topHamburger.classList.toggle("rotate-45")
        topHamburger.classList.toggle("translate-y-3")

        middleHamburger.classList.toggle("opacity-0")
        middleHamburger.classList.toggle("-translate-x-[10px]")

        bottomHamburger.classList.toggle("-rotate-45")
        bottomHamburger.classList.toggle("-translate-y-3")
    })
}

function carouselHandler() {
    const slider = tns({
        container: '.my-slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        swipeAngle: 45,
        autoplayButtonOutput: false,
        autoplayHoverPause: true,
        controlsContainer: '#controls',
        prevButton: '.previous',
        nextButton: '.next',
        autoplayButton: false,
        mouseDrag: true,
        preventScrollOnTouch: 'auto',
    });
}

menuHandler()
carouselHandler()