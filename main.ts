basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 20) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
        basic.pause(290)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
        basic.pause(1000)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
})
