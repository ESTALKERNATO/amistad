input.onPinPressed(TouchPin.P0, function () {
    basic.showString("" + (randint(1, 100)))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Hello!")
})
basic.forever(function () {
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
