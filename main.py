basic.show_string("Bonjour")
basic.show_number(10853)
basic.show_arrow(ArrowNames.SOUTH)
basic.show_icon(IconNames.HAPPY)

def on_forever():
    basic.pause(500)
basic.forever(on_forever)
