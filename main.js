

//humburger popup menu page transition
const humberger = document.querySelector(".humberger");
const navMenu = document.querySelector(".nav-links");
const mobileLogo = document.querySelector(".moblogo");
const portfo = document.querySelector("#port");
const aboutM = document.querySelector("#about");
const conts = document.querySelector("#cont");

humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.
    addEventListener("click", () => {
        humberger.classList.remove("active");
        navMenu.classList.remove("active");
       
    }))



 

    

