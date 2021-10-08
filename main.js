const inputs = document.querySelectorAll("input");

function handelUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}
// document.documentElement.style.setProperty('--themeColor', getColor());

inputs.forEach((input) => input.addEventListener("change", handelUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handelUpdate));
