// @ts-disable
window.RuleMap = function RuleMap() {
    /** @type {string[]} */
    this.keys = []
    /** @type {string[]} */
    this.values = []

    RuleMap.prototype.insert = /** @param {string} key @param {string} value*/ function insert(key, value) {
        this.keys.push(key)
        this.values.push(value)
    }

    RuleMap.prototype.get = /** @param {string} key */ function get(key) {
        let idx = 0

        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] === key) {
                idx = i
            }
        }

        return this.values[idx]
    }

    RuleMap.prototype.getKeys = function keys() {
        return this.keys
    }

    RuleMap.prototype.contains = /** @param {string} key */ function contains(key) {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] === key) {
                return true
            }
        }

        return false
    }

    RuleMap.prototype.clear = function clear() {
        this.keys.splice(0, this.keys.length)
        this.values.splice(0, this.values.length)
    }
}

window.turtle = function turtle() {
    background(50)
    resetMatrix()
    translate(width / 2, height)
    stroke(255)

    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i)

        if (current === "F") {
            line(0, 0, 0, -len)
            translate(0, -len)
        } else if (current === "+") {
            rotate(angle)
        } else if (current === "-") {
            rotate(-angle)
        } else if (current === "[") {
            push()
        } else if (current === "]") {
            pop()
        }
    }
}

window.createRuleMap = function createRuleMap() {
    return new RuleMap()
}

window.generatePattern = function generatePattern() {
    len *= 0.40
    let nextSentence = ""

    for (let i = 0; i < sentence.length; i++) {
        let current = sentence.charAt(i)

        if (_map.contains(current)) {
            nextSentence += _map.get(current)
        } else {
            nextSentence += current
        }
    }

    sentence = nextSentence
    turtle()
}