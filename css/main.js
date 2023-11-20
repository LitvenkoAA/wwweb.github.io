/*(function () {
    const header = document.querySelector('.header');
    window.onscroll=()=>{
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    };
}())*/

/*Смена тона header при скроле с помощью addEvLi*/


window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    if (window.pageYOffset > 100) {
        header.classList.add("header_active");
    } else {
        header.classList.remove("header_active");
    }
    });
