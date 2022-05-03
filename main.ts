input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
})
DFRobotMaqueenPlus.I2CInit()
