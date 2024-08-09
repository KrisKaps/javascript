function count() {
    console.log('count was clicked')

    let start = document.getElementById('istart').value;
    let end = document.getElementById('iend').value;
    let step = document.getElementById('istep').value;

    console.log('Start:', start, '-', typeof (start));
    console.log('End:', end, '-', typeof (end));
    console.log('Step:', step, '-', typeof (step));

    let counter = '';
    let cancount = true;

    if (step == '' || step == "0" || parseInt(step) < 0) {
        alert('Impossible to count with this step value. Step value now equals 1');
        step = 1;
        document.getElementById('istep').value = 1;
    }
    if (start == '') {
        counter += 'Impossible to count without a Start value.<br>';
        cancount = false;
    }
    if (end == '') {
        counter += 'Impossible to count without an End value.<br>';
        cancount = false;
    }
    if (cancount) {
        counter += 'Counting:<br>';
        if (parseInt(start) > parseInt(end)) {
            for (let i = parseInt(start); i >= parseInt(end); i -= parseInt(step)) {
                // Uni-Code in JS: \u{1F449}
                counter += i + ' 👉🏽 ';
            }
        } else {
            for (let i = parseInt(start); i <= parseInt(end); i += parseInt(step)) {
                counter += i + ' 👉🏽 ';
            }
        }
        // Uni-Code in JS: \u{1F3C1}
        counter += ' 🚩';
    }
    
    document.getElementById('counter').innerHTML = counter;
}