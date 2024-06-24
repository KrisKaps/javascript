function count() {
  console.log("clicked count");

  let start = document.getElementById("istart").value;
  let end = document.getElementById("iend").value;
  let step = document.getElementById("istep").value;

  console.log("Start: " + start);
  console.log("End: " + end);
  console.log("Step: " + step);

  let counter = "";

  if (start == "") {
    alert("Start can't be empty!");
  } else if (end == "") {
    alert("End can't be empty!");
  } else if (step == "" || step == "0" || parseInt(step) < 0) {
    alert('Step can\'t be empty, "0" or smaller!');
  } else if (parseInt(start) > parseInt(end)) {
    alert("Start can't be greater than End!");
  } else {
      for (let i = parseInt(start); i <= parseInt(end); i += parseInt(step)) {
        if (i == parseInt(end)) {
            counter += i + '.';
        } else {
            counter += i + ', ';
        }
      }
  }

  document.getElementById("counter").innerHTML = counter;
}
