function count() {
    console.log('count was clicked')

    let start = document.getElementById('istart').value;
    let end = document.getElementById('iend').value;
    let step = document.getElementById('istep').value;

    console.log('Start:', start, '-', typeof (start));
    console.log('End:', end, '-', typeof (end));
    console.log('Step:', step, '-', typeof (step));

    let counter = '';

    if (start == '') {
        counter += 'Impossible to count without a Start.<br>';
    }
    if (end == '') {
        counter += 'Impossible to count without an End.<br>';
    }
    if (parseInt(start) > parseInt(end)) {
        counter += 'Impossible to count when Start higher than End.<br>';
    }
    if (step == '' || step == "0" || parseInt(step) < 0) {
        alert('Impossible to count with this step value. Step value now equals 1');
        step = 1;
        document.getElementById('istep').value = 1;
    } else {
        counter += 'Counting:<br>';
        for (let i = parseInt(start); i <= parseInt(end); i += parseInt(step)) {
            counter += i + ' 👉🏽 ';
        }
        counter += ' 🚩';
    }
    document.getElementById('counter').innerHTML = counter;
}