




document.getElementById("btn-log-out").addEventListener("click", (event) => {
  window.location.href = "./index.html";
});

// !card event
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
    "history-card":"History-Section",
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
