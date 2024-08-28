

let numbers = []
let finishtxt = document.getElementById('ifinish')

function addNumber() {
    let n = document.getElementById('inum').value
    let numberlist = document.getElementById('inumber-list')
    let num = parseInt(n)

    if (n == '' || parseInt(n) < 1 || parseInt(n) > 100) {
        alert('Please enter a valid number.')
    } else if (numbers.indexOf(num) != -1) {
        alert('This number is already in the list.')
    } else {
        finishtxt.innerHTML = ''

        numbers.push(num)
        console.log(numbers)
        let item = document.createElement('option')
        item.text = `Number ${num} was added`
        item.value = `num${num}`
        numberlist.appendChild(item)
    }

}

function sum(arr){
    let sum = 0
    for (let pos in arr){
        sum += arr[pos]
    }
    return sum
}


function finish() {

    if (numbers.length == 0) {
        alert('There are no numbers, please add some numbers before finish.')
    } else {

    // timestable.innerHTML = '' // clear previous table before generating new one
    finishtxt.innerHTML = ''

    numbers.sort((a, b) => a - b) // sort numbers in descending order

    finishtxt.innerHTML += `In total, we have ${numbers.length} added numbers.<br><br>`
    
    finishtxt.innerHTML += `The biggest added number is ${numbers[numbers.length-1]}.<br><br>`
    
    finishtxt.innerHTML += `The smallest added number is ${numbers[0]}.<br><br>`
    
    finishtxt.innerHTML += `Somando todos os valores, we have ${sum(numbers)}.<br><br>`
    
    finishtxt.innerHTML += `Somando todos os valores, we have ${sum(numbers)/numbers.length}.`}
    
}