function fillBattery() {
    batteryStatusPlus(4);
    chenchColorBattery();
    chenchBatteryRate();
}

function emptyBattery() {
    batterxStatusMinus(0);
    chenchColorBattery();
    chenchBatteryRate();
}

function batteryStatusPlus(maxValue) {
    if (batteryStatus < maxValue) {
        batteryStatus++;
    }
}

function batterxStatusMinus(minValue) {
    if (batteryStatus > minValue) {
        batteryStatus--;
    }
}

function chenchColorBattery() {
    if (batteryStatus === 0) {
        batteryBoxOne.style["background-color"] = "white";
        batteryBoxTwo.style["background-color"] = "white";
        batteryBoxThree.style["background-color"] = "white";
        batteryBoxFour.style["background-color"] = "white";
    }
    if (batteryStatus === 1) {
        batteryBoxOne.style["background-color"] = "red";
        batteryBoxOne.style["background-color"] = "red";
        batteryBoxTwo.style["background-color"] = "white";
        batteryBoxFour.style["background-color"] = "white";
    } else if (batteryStatus === 2) {
        batteryBoxOne.style["background-color"] = "orange";
        batteryBoxTwo.style["background-color"] = "orange";
        batteryBoxThree.style["background-color"] = "white";
        batteryBoxFour.style["background-color"] = "white";
    } else if (batteryStatus === 3) {
        batteryBoxOne.style["background-color"] = "yellow";
        batteryBoxTwo.style["background-color"] = "yellow";
        batteryBoxThree.style["background-color"] = "yellow";
        batteryBoxFour.style["background-color"] = "white";
    } else if (batteryStatus === 4) {
        batteryBoxOne.style["background-color"] = "green";
        batteryBoxTwo.style["background-color"] = "green";
        batteryBoxThree.style["background-color"] = "green";
        batteryBoxFour.style["background-color"] = "green";
    }

}

function chenchBatteryRate() {
    if (batteryStatus === 0) {
        batteryRate.innerHTML = "Doluluk Orani: %0";
    } else if (batteryStatus === 1) {
        batteryRate.innerHTML = "Doluluk Orani: %25";
    } else if (batteryStatus === 2) {
        batteryRate.innerHTML = "Doluluk Orani: %50";
    } else if (batteryStatus === 3) {
        batteryRate.innerHTML = "Doluluk Orani: %75";
    } else if (batteryStatus === 4) {
        batteryRate.innerHTML = "Doluluk Orani: %100";
    }
}