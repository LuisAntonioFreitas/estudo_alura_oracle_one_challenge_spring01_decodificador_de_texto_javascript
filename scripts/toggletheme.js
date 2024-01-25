const toggle = document.getElementById("toggletheme");
const image = document.getElementById("togglethemeimage");

const logo = document.getElementById("imglogo");
const result = document.getElementById("imgresult");
const imgexclamation = document.getElementById("imgexclamation");

var theme = window.localStorage.getItem("dt-theme");
if (theme == "dark") document.body.classList.add("dark");

const current = theme ? theme : null;
if (current) {
  if (current != "dark") {
    applicationsThemeLight();
  } else {
    applicationsThemeDark();
  };
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme == "dark") {
    theme = "light";
    applicationsThemeLight();
  } else {
    theme = "dark";
    applicationsThemeDark();
  };
  window.localStorage.setItem("dt-theme", theme);
});

function applicationsThemeLight() {
  image.setAttribute('src', './assets/toggletheme.png');

  logo.setAttribute('src', './assets/logo_alura.png');
  result.setAttribute('src', './assets/image_result.svg');
  imgexclamation.setAttribute('src', './assets/icons/exclamation.png');
}
function applicationsThemeDark() {
  image.setAttribute('src', './assets/toggletheme_dark.png');

  logo.setAttribute('src', './assets/logo_alura_dark.png');
  result.setAttribute('src', './assets/image_result_dark.svg');
  imgexclamation.setAttribute('src', './assets/icons/exclamation_dark.png');
}