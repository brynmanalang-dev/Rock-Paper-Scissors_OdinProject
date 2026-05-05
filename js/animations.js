const round = document.getElementById("round");
const option = document.getElementById("option");
const instruction = document.getElementById("textInstruction");
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const openSettings = document.getElementById("openSettings")
const closeSettings = document.getElementById("closeSettings")
const settingsUi = document.getElementById("settingsUi")
const homeScreen = document.getElementById("homeScreen")

homeScreen.addEventListener("click", () => {
    window.location.href = "../index.html"
})

openSettings.addEventListener("click", () => (
    settingsUi.classList.add("show")
))


closeSettings.addEventListener("click", () => (
    settingsUi.classList.remove("show")
))

round.addEventListener("animationend",() => {
    round.remove()
    option.classList.add("show");
    instruction.classList.add("show");
});

