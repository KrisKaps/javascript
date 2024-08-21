function timesTable() {
    let n = document.getElementById('inum').value
    let timestable = document.getElementById('itimes-table')

    if (n.length == '') {
        alert('Please enter a valid number.')
    } else {
        let num = parseInt(n)
        let c = 1
        timestable.innerHTML = '' // clear previous table before generating new one
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            timestable.appendChild(item)
            c++
        }
    }

}