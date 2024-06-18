function count() {
    console.log('clicked count');
    
    let start = document.getElementById('istart').value;
    let end = document.getElementById('iend').value;
    let step = document.getElementById('istep').value;
    
    console.log('Start: ' + start);
    console.log('End: ' + end);
    console.log('Step: ' + step);

    let counter = '';

    if (start == ""){
        alert('Start can\'t be empty!');
    }
    if (end == ""){
        alert('End can\'t be empty!');
    }
    if (step == "" || step == '0'){
        alert('Step can\'t be empty or "0"!');
    }
    if (parseInt(start) > parseInt(end)){
        alert('Start can\'t be greater than End!');
    }

    for (let i = parseInt(start); i <= parseInt(end); i += parseInt(step)) {
        counter += i +', ';
    }
    document.getElementById('counter').innerHTML = counter;
};