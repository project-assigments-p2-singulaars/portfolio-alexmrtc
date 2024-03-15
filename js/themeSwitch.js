
const lightText = "theme-light";
const darkText = "theme-dark";

const sunIcon = "sun.svg";
const moonIcon = "moon.svg";

localStorage.setItem("theme", lightText);

function setTheme(icon, theme){
    themeIconResponsive.src = icon;
    localStorage.setItem("theme", theme);
}

let themeIconResponsive = document.getElementById("responsiveIcon");

themeIconResponsive.addEventListener("click", () => {
    localStorage.getItem("theme") === lightText ? setTheme(moonIcon, darkText) : setTheme(sunIcon, lightText)
} )