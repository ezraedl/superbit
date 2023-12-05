basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
        basic.pause(1000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
        SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
        basic.pause(1000)
    }
})
