for (let index = 0; index < 2; index++) {
    basic.showString("Bonjour")
    basic.showNumber(10853)
    basic.showArrow(ArrowNames.South)
    basic.showIcon(IconNames.Happy)
}
basic.forever(function () {
    basic.pause(500)
})
