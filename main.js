const list = document.querySelector(".list");
const hamburgerMenu = document.querySelector(".hamburger-menu")

hamburgerMenu.addEventListener('click' , ()=>{
    hamburgerMenu.classList.toggle("is-active");
    list.classList.toggle("is-active");
})