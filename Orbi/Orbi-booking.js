const datePickers = document.querySelectorAll('.datePicker');
const today = new Date().toISOString().split('T')[0];

datePickers.forEach(datePicker => {
    datePicker.setAttribute('min', today);
});


function submitForm() {
  document.querySelector("form").submit();
}

const retrn = document.getElementById("return-d");
const oneway = document.getElementById("one-way-d");
const choseone = document.getElementById("one-way");
const chosertrn = document.getElementById("return");


function chosereturn() {
  retrn.classList.remove("hidden");
  oneway.classList.add("hidden");
  choseone.classList.remove("shadow2");
  chosertrn.classList.add("shadow1");
}
function choseoneway() {
  retrn.classList.add("hidden");
  oneway.classList.remove("hidden");
  choseone.classList.add("shadow2");
  chosertrn.classList.remove("shadow1");
}
