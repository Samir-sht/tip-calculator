let bill_amount = document.getElementById("bill-amt");
const bill_warning = document.getElementById("bill-warning");
let custom_num = document.getElementById("custom");
let people_qty = document.getElementById("people-quantity");
const people_warning = document.getElementById("people-warning");
let total_tip = document.getElementById("total-tip");
let total_person = document.getElementById("total-amt");
const reset = document.getElementById("reset");

let tipamount = (0.0).toFixed(2);

function buttonid(amt) {
  let total_tips = ((bill_amount.value / people_qty.value) * amt.value) / 100;
  total_tip.innerHTML = `$${total_tips}`;
  console.log(total_tips);
}

bill_amount.addEventListener("input", () => {
  if (bill_amount.value === "" || bill_amount.value < 1) {
    bill_warning.style.display = "block";
    bill_amount.style.border = "2px solid red";
  } else {
    bill_warning.style.display = "none";
    bill_amount.style.border = "2px solid hsl(183, 100%, 15%) ";
  }
});

people_qty.addEventListener("input", () => {
  if (people_qty.value === "" || people_qty.value < 1) {
    people_warning.style.display = "block";
    people_qty.style.border = "2px solid red";
  } else {
    people_warning.style.display = "none";
    people_warning.style.border = "2px solid hsl(183, 100%, 15%)";
  }
});

custom_num.oninput = function () {
  let customvalue = (
    ((bill_amount.value / people_qty.value) * custom.value) /
    100
  ).toFixed(2);
  total_tip.innerHTML = `$${customvalue}`;
};

setInterval(function calculatetotal() {
  if (bill_amount.value > 0 && people_qty.value > 0) {
    let total_persons = (bill_amount.value / people_qty.value).toFixed(2);
    total_person.innerHTML = `$${total_persons}`;
  } else {
    total_person.innerHTML = `$${tipamount}`;
    total_tip.innerHTML = `$${tipamount}`;
  }
}, 100);

reset.addEventListener("click", () => {
  if (bill_amount.value > 0) {
    bill_amount.value = "";
  }

  if (people_qty.value > 0) {
    people_qty.value = "";
  }

  if (custom_num.value >= 0) {
    custom_num.value = "";
  }
});
