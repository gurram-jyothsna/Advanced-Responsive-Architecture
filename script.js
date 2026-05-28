const themeBtn =
  document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  const html =
    document.documentElement;

  if (html.dataset.theme === "light") {

    html.dataset.theme = "dark";

    themeBtn.textContent = "☀️";

  } else {

    html.dataset.theme = "light";

    themeBtn.textContent = "🌙";
  }
});