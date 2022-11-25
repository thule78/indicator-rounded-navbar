const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".indicator");
const navLinks = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", ()=> {
    nav.classList.toggle("open");
});

navItems.forEach((navItem, index)=> {
    navItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        navItem.classList.toggle("active");
        indicator.style.transform = `translateX(-1rem) rotate(${index * 51.5}deg)`;
    })
})