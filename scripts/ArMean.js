let dataset = [];

let valueInput = document.getElementById("valueInput");
let datasetDisplay = document.getElementById("datasetDisplay");
let meanDisplay = document.getElementById("meanDisplay");

document.getElementById("addButton").onclick =addValue;

function addValue() {
    //alert('Add ');
    console.log(1)
  let v = valueInput.value.trim();
  if (v === "" || isNaN(v)) {
    alert("Invalid entry.");
  } else {
    dataset.push(Number(v));
  }
  valueInput.value = "";
  show();

};
document.getElementById("removeButton").onclick = removeValue;  

function removeValue(){
    
  let v = valueInput.value.trim();
  if (v === "" || isNaN(v)) {
    alert("Invalid entry.");
  } else {
    let val = Number(v);
    let i = dataset.indexOf(val);
    if (i === -1) {
      alert("Item not found.");
    } else {
      dataset.splice(i, 1);
    }
  }
  valueInput.value = "";
  show();
};

function show() {
  datasetDisplay.innerHTML = dataset.length ? dataset.join(", ") : " ";
  if (dataset.length === 0) {
    meanDisplay.innerHTML = "Mean: ";
  } else {
    let sum = 0;
    for (let i = 0; i < dataset.length; i++) {
      sum += dataset[i];
    }
    meanDisplay.innerHTML = "Mean: " + (sum / dataset.length);
  }
}

show();