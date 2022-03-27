var message = prompt("Enter your message", "");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textBox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for (let index = 0; index < counter; index++) {
    textBox.innerHTML = message;
    textBox.dispatchEvent(event);
    document.getElementsByClassName("_4sWnG")[0].click();
}