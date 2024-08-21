

let numbers = []
let finish = document.getElementById('ifinish')

function addNumber() {
    let n = document.getElementById('inum').value
    let numberlist = document.getElementById('inumber-list')
    let num = parseInt(n)

    if (n.length == '' || parseInt(n) < 1 || parseInt(n) > 100) {
        alert('Please enter a valid number.')
    } else if (numbers.indexOf(num) != -1) {
        alert('This number is already in the list.')
    } else {
        finish.innerHTML = ''

        numbers.push(num)
        console.log(numbers)
        let item = document.createElement('option')
        item.text = `Valor ${num} foi adicionado`
        item.value = `num${num}`
        numberlist.appendChild(item)
    }

}


function finish() {
    
    finish.innerHTML = ''

    
    // timestable.innerHTML = '' // clear previous table before generating new one
        
    
}