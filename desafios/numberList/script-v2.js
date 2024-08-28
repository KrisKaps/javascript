let num = document.querySelector('input#inum')
let list = document.querySelector('select#inumber-list')
let res = num.querySelector('p#ifinish')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function addNumber(){
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(num.value)
        let item = document.createElement('option')
        item.text = `Number ${num.value} added.`
        item.value = `num${num.value}`
        list.appendChild(item)
    } else {
        window.alert('Invalid number or already in the list.')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (values.length == 0) {
        alert('There are no numbers, please add some numbers before finish.')
    } else {
        let total = values.length
        
        res.innerHTML = ''
        res.innerHTML += `The smallest added number is ${Math.min(...values)}.<br><br>`
        res.innerHTML += `The sum of all numbers is ${values.reduce((a, b) => a + Number(b), 0)}.<br><br>`
        res.innerHTML += `The average of all numbers is ${values.reduce((a, b) => a + Number(b), 0) / values.length}.`
    }
}