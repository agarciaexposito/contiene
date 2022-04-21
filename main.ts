let coincide = 0
input.onButtonPressed(Button.A, function () {
    if (contiene("hola", "h")) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
function contiene (palabra: string, letra: string) {
    coincide = 0
    for (let index = 0; index <= palabra.length - 1; index++) {
        if (palabra.substr(index, 1) == letra) {
            coincide = 1
        }
    }
    if (coincide == 0) {
        return false
    } else {
        return true
    }
}
