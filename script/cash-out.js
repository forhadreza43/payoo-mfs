// !cash Out button event
document.getElementById("btn-out-money").addEventListener("click", (event) => {
  event.preventDefault();
  const number = getInputValueById("out-number");
  const amount = getInputValueById("out-amount", "float");
  const pin = getInputValueById("out-pin", "int");
  let TotalAmount = getTextContentById("TotalAmount",'float');
  if (
    number.length === 11 &&
    amount > 0 &&
    amount <= TotalAmount &&
    pin === 1234
  ) {

    setTextContentById("TotalAmount", getTextContentById("TotalAmount",'float')-amount);
    getElement("out-number").value = "";
    getElement("out-amount").value = "";
    getElement("out-pin").value = "";
    addHistory(
      "Cash Out",
      `Withdraw $${amount} via ${number}`
    );
  } else {
    alert("Something Wrong");
  }
});
