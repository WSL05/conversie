input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function converteer (bgetal: string) {
    totaal = 0
    for (let index = 0; index <= bgetal.length - 1; index++) {
        totaal = totaal + 2 ** (index * parseFloat(bgetal.charAt(index)))
    }
    return totaal
}
input.onButtonPressed(Button.AB, function () {
    omgekeerd = keerOm(binair)
    basic.showNumber(converteer(omgekeerd))
})
function keerOm (txt: string) {
    omgekeerd = ""
    for (let waarde of txt) {
        omgekeerd = "" + waarde + omgekeerd
    }
    return omgekeerd
}
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
function som (getal1: number, getal2: number) {
    resultaat = getal1 + getal2
    return resultaat
}
let resultaat = 0
let omgekeerd = ""
let totaal = 0
let binair = ""
binair = ""
