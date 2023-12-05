enum RadioMessage {
    message1 = 49434
}
let סיבוב = 0
let כיוון = 0
input.onButtonPressed(Button.A, function () {
    סיבוב = 0
    if (כיוון == -255) {
        כיוון = 255
    } else {
        כיוון = -255
    }
})
input.onButtonPressed(Button.AB, function () {
    כיוון = 0
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    if (סיבוב == -1) {
        סיבוב = 1
    } else {
        סיבוב = -1
    }
})
basic.forever(function () {
    if (סיבוב != 0) {
        if (סיבוב == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        SuperBit.MotorRun(SuperBit.enMotors.M1, -1 * (סיבוב * 355))
        SuperBit.MotorRun(SuperBit.enMotors.M3, סיבוב * 255)
    } else {
        if (כיוון == 255) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            if (כיוון == -255) {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
            } else {
                basic.showLeds(`
                    # # # # #
                    # . . . #
                    # . # . #
                    # . . . #
                    # # # # #
                    `)
            }
        }
        SuperBit.MotorRun(SuperBit.enMotors.M1, כיוון)
        SuperBit.MotorRun(SuperBit.enMotors.M3, כיוון)
    }
})
