let batteryStatus = 0;
const plusElement = document.querySelector("#plus");
const minusElement = document.querySelector("#minus");
const batteryBoxOne = document.querySelector("#battery-one-box");
const batteryBoxTwo = document.querySelector("#battery-two-box");
const batteryBoxThree = document.querySelector("#battery-three-box");
const batteryBoxFour = document.querySelector("#battery-four-box");
const batteryRate = document.querySelector("#battery-rate");

plusElement.addEventListener("click", fillBattery);
minusElement.addEventListener("click", emptyBattery);

alert("Pil yuzdesini arttirmak icin DOLDUR butonuna / azaltmak icin ise BOSALT butonuna baasiniz.")