const input = document.querySelector("#input-box");
const result = document.querySelector("#result");

input.addEventListener("input", () => {
  result.innerHTML = `Letters Count =   ${input.value.length}`;
});
