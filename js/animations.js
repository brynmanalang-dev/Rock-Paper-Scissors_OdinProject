const box = document.getElementById("box");
const option = document.getElementById("option");
const instruction = document.querySelector(".textInstruction");

box.addEventListener("animationend",() => {
    box.remove()
    option.classList.add("show");
    instruction.classList.add("show");
});
