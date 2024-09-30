let CONTADOR = 0
input.onGesture(Gesture.Shake, function () {
    CONTADOR += 1
})
basic.forever(function () {
    if (CONTADOR < 10) {
        basic.showNumber(CONTADOR)
    } else {
        basic.showString("FIN")
    }
})
