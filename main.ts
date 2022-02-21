input.onSound(DetectedSound.Loud, function () {
    MOTOR_oN = !(MOTOR_oN)
    if (MOTOR_oN) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
let MOTOR_oN = false
input.setSoundThreshold(SoundThreshold.Loud, 160)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
})
