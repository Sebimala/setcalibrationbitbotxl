input.onButtonPressed(Button.A, function () {
    if (bitbot.getVersionCode() == 5) {
        bias += 1
        if (bias > 100) {
            bias = 100
        }
        updateBias()
    }
})
input.onGesture(Gesture.SixG, function () {
    Speed += 30
    if (Speed > 90) {
        Speed = 30
    }
    bias = bitbot.readEEROM(Speed / 30 - 1)
    basic.showNumber(Math.round(Speed / 10))
})
input.onButtonPressed(Button.AB, function () {
    if (bitbot.getVersionCode() == 5) {
        basic.showNumber(bias)
        bitbot.goms(BBDirection.Forward, Speed, 2000)
        basic.showNumber(Math.round(Speed / 10))
    }
})
input.onButtonPressed(Button.B, function () {
    if (bitbot.getVersionCode() == 5) {
        bias += -1
        if (bias < -100) {
            bias = -100
        }
        updateBias()
    }
})
function updateBias () {
    if (Speed == 30) {
        bitbot.writeEEROM(bias, 0)
    } else if (Speed == 60) {
        bitbot.writeEEROM(bias, 1)
    } else {
        bitbot.writeEEROM(bias, 2)
    }
    bitbot.loadCalibration()
}
let bias = 0
let Speed = 0
basic.showNumber(bitbot.getVersionCode())
if (bitbot.getVersionCode() == 5) {
    bitbot.loadCalibration()
    Speed = 30
    basic.showNumber(Math.round(Speed / 10))
    bias = bitbot.readEEROM(Speed / 30 - 1)
} else {
    basic.showString("Wrong Version")
}
