const styleSwitchertoggler = document.querySelector(".style-switcher-toggler");
styleSwitchertoggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style - switcher on scroll
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");

    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});


/*colores de temas*/
const alternateStyle = document.querySelectorAll(".alternate-style");
const buttons = document.querySelectorAll(".btn");

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            updateButtonColors(color);
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

function updateButtonColors(color) {
    buttons.forEach((button) => {
        button.style.backgroundColor = getButtonColor(color, button.classList);
    });
}

function getButtonColor(color, classList) {
    // Puedes mapear los colores según las clases de los botones
    switch (color) {
        case "color-1":
            return "blue";
        case "color-2":
            return "#fa5b0f";
        case "color-3":
            return "#37b182";
        case "color-4":
            return "red";
        case "color-5":
            return "#f021b2";
        default:
            return "blue"; // Color predeterminado en caso de que no coincida con ninguna clase
    }
}

/*temas noche y dia modo*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
