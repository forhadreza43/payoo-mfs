// !add money button event
document.getElementById("btn-add-money").addEventListener("click", (event) => {
  event.preventDefault();
  const bank = getInputValueById("add-bank");
  const number = getInputValueById("add-number");
  const amount = getInputValueById("add-amount", "float");
  const pin = getInputValueById("add-pin", "int");
  if (amount < 0) {
    alert("Amount can not be negative");
    return;
  }

  if (
    bank !== "Select bank" &&
    number.length === 11 &&
    amount > 0 &&
    pin === 1234
  ) {
    setTextContentById(
      "TotalAmount",
      getTextContentById("TotalAmount", "float") + amount,
    );
    getElement("add-number").value = "";
    getElement("add-amount").value = "";
    getElement("add-pin").value = "";
    addHistory(
      "Add Money",
      `Deposite $${amount} from account ${number} via ${bank}`,
    );
  } else {
    alert("Something Wrong");
  }
});
