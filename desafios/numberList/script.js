

let numbers = []
let finishtxt = document.getElementById('ifinish')

function addNumber() {
    let n = document.getElementById('inum').value
    console.log(n)
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


function finish() {
    
    // timestable.innerHTML = '' // clear previous table before generating new one
    finishtxt.innerHTML = ''

    numbers.sort((a, b) => a - b) // sort numbers in descending order

    finishtxt.innerHTML += `In total, we have ${numbers.length} added numbers.<br><br>`
    
    finishtxt.innerHTML += `The biggest added number is ${numbers[numbers.length-1]}.<br><br>`
    
    finishtxt.innerHTML += `The biggest added number is ${numbers[0]}.<br><br>`
    
    finishtxt.innerHTML += `Somando todos os valores, we have ${numbers[0]}.<br><br>`
    
    
        
    
}