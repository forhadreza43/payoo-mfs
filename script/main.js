// !add money button event
document.getElementById("btn-add-money").addEventListener("click", (event) => {
  event.preventDefault();
  const bank = document.getElementById("add-bank").value;
  const number = document.getElementById("add-number").value;
  const amount = document.getElementById("add-amount").value;
  const pin = document.getElementById("add-pin").value;
  let TotalAmount = document.getElementById("TotalAmount");
  if (
    bank !== "Select bank" &&
    number.length === 11 &&
    parseFloat(amount) > 0 &&
    parseInt(pin) === 1234
  ) {
    TotalAmount.textContent =
      parseFloat(TotalAmount.textContent) + parseFloat(amount);
    document.getElementById("add-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin").value = "";
  } else {
    alert("Something Wrong");
  }
});

// !cash Out button event
document.getElementById("btn-out-money").addEventListener("click", (event) => {
  event.preventDefault();
  const number = document.getElementById("out-number").value;
  const amount = document.getElementById("out-amount").value;
  const pin = document.getElementById("out-pin").value;
  let TotalAmount = document.getElementById("TotalAmount");
  if (
    number.length === 11 &&
    parseFloat(amount) > 0 &&
    parseInt(pin) === 1234
  ) {
    TotalAmount.textContent =
      parseFloat(TotalAmount.textContent) - parseFloat(amount);
    document.getElementById("out-number").value = "";
    document.getElementById("out-amount").value = "";
    document.getElementById("out-pin").value = "";
  } else {
    alert("Something Wrong");
  }
});

// !get bonus
document.getElementById("btn-bonus").addEventListener("click", (event) => {
  event.preventDefault();
  const coupon = document.getElementById("coupon").value;
  let TotalAmount = document.getElementById("TotalAmount");
  if (parseInt(coupon) === 123) {
    TotalAmount.textContent = parseFloat(TotalAmount.textContent) + 10;
    document.getElementById("coupon").value = "";
  } else {
    alert("Something Wrong");
  }
});

document.getElementById("btn-log-out").addEventListener("click", (event) => {
  window.location.href = "./index.html";
});

// TODO: korte hobe
document.getElementById("cards").addEventListener("click", (event) => {
  event.preventDefault();
  let targetElement = event.target.closest(".card");
  if (!targetElement) return;
  const formList = document.getElementById("form-container").children;
  activeForm(targetElement, formList);
});

function activeForm(targetElement, formList) {
  const formMapping = {
    "add-money-card": "Add-Money-Section",
    "cash-out-card": "Cash-Out-Section",
    "transfer-money-card": "Transfer-Money-Section",
    "bonus-card": "Bonus-Section",
    "pay-bill-card": "Pay-Bill-Section",
  };

  const targetID = targetElement.getAttribute("id");
  if (!targetID || !formMapping[targetID]) return;
  document.querySelectorAll(".card").forEach((card) => removeDesign(card));
  for (const elem of formList) {
    if (elem.getAttribute("id") === formMapping[targetID]) {
      elem.style.display = "block";
      addDesign(targetElement);
    } else {
      elem.style.display = "none";
    }
  }
}

function addDesign(targetElement) {
  targetElement.style.border = "2px solid blue";
  targetElement.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
}

function removeDesign(targetElement) {
  targetElement.style.border = "";
  targetElement.style.backgroundColor = "";
}
