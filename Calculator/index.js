function appendValue(val) {
  const display = document.getElementById("Display");
  display.value += val;
}

function calculate() {
  const display = document.getElementById("Display");
  display.value = new Function("return " + display.value)();
}

function clearDisplay() {
  const display = document.getElementById("Display");
  display.value = "";
}

function backspace() {
  const display = document.getElementById("Display");
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  const display = document.getElementById("Display");
  if (event.key >= "0" && event.key <= "9") {
    appendValue(event.key);
  } else if (["+", "-", "*", "/"].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape") {
    clearDisplay();
  } else if (event.key === "Backspace") {
    backspace();
  }
});
