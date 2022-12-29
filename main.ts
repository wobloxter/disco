basic.showString("LETS DO A DISCO :)")
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.showLeds(`
    # . # . #
    # . # . #
    # # # . #
    # . # . #
    # . # . #
    `)
basic.pause(2000)
basic.showString("3....2....1...GO")
basic.forever(function () {
    cuteBot.motors(100, 0)
    basic.pause(1000)
    cuteBot.motors(0, 100)
    basic.pause(1000)
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    basic.pause(100)
})
basic.forever(function () {
	
})
