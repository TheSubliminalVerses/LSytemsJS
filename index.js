// @ts-check
window._map = createRuleMap()
window.axiom = "F"
window.sentence = axiom
window.len = 150
window.angle = 0
window.inp = null

function setup() {
    createCanvas(750, 600)
    
    inp = createInput("FF+[+F-F-F]-[-F+F+F]")
    inp.input(inputFunction)

    angle = radians(25)

    let button = createButton("generate")
    button.mousePressed(generatePattern)

    _map.insert("F", inp.value().toString())

    turtle()
}

function inputFunction() {
    _map.clear()
    _map.insert("F", inp.value().toString())
    turtle()
}