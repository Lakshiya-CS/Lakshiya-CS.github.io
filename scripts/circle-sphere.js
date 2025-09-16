function calcCircumference() {
  let r = document.getElementById('r').value;
  if (r === "" || r <= 0) {
    document.getElementById('output').innerText = "Enter a positive radius.";
    return;
  }
  let Circumference = 2 * Math.PI * r;
  document.getElementById('output').innerText = "Circumference = " + Circumference.toFixed(2);
}

function calcArea() {
  let r = document.getElementById('r').value;
  if (r === "" || r <= 0) {
    document.getElementById('output').innerText = "Enter a positive radius.";
    return;
  }
  let area = Math.PI * r * r;
  document.getElementById('output').innerText = "Area = " + area.toFixed(2);
}

function calcVolume() {
  let r = document.getElementById('r').value;
  if (r === "" || r <= 0) {
    document.getElementById('output').innerText = "Enter a positive radius.";
    return;
  }
  let volume = (4 / 3) * Math.PI * r * r * r;
  document.getElementById('output').innerText = "Volume = " + volume.toFixed(2);
}