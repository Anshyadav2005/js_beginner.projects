const display = document.getElementById("display");
const keyboard = document.querySelector(".keyboard");

keyboard.addEventListener("click", function (e) {

    if (!e.target.matches("button")) return;

    let value = e.target.innerText;

    // AC
    if (value === "AC") {
        display.value = "";
        return;
    }

    // DEL
    if (value === "DEL") {
        display.value = display.value.slice(0, -1);
        return;
    }

    // =
    if (value === "=") {
        try {
            let expression = display.value.replace(/X/g, "*");
            display.value = eval(expression);
        } catch {
            display.value = "Error";
        }
        return;
    }

    // Prevent double operators
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "/", "*", "%"];

    if (value === "X") value = "*";

    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    display.value += value;
});