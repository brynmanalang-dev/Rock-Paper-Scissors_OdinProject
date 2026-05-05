const round = document.getElementById("round");
const option = document.getElementById("option");
const instruction = document.getElementById("textInstruction");


const openSettings = document.getElementById("openSettings")
const closeSettings = document.getElementById("closeSettings")
const settingsUi = document.getElementById("settingsUi")
const homeScreen = document.getElementById("homeScreen")
const playAgain = document.getElementById("restartGame")
const homeScreenEnd = document.getElementById("homeScreenEnd")

homeScreen.addEventListener("click", () => {
    window.location.href = "../index.html"
})

homeScreenEnd.addEventListener("click", () => {
    window.location.href = "../index.html"
})

openSettings.addEventListener("click", () => (
    settingsUi.classList.add("show")
))


closeSettings.addEventListener("click", () => (
    settingsUi.classList.remove("show")
))

playAgain.addEventListener("click", () => (
    location.href='game.html'
))

round.addEventListener("animationend",() => {
    round.classList.add("hide")
    option.classList.add("show");
    instruction.classList.add("show");
});

