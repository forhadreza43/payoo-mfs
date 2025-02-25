// !get bonus
document.getElementById("btn-bonus").addEventListener("click", (event) => {
  event.preventDefault();
  const coupon = getInputValueById("coupon");
  let bonus = 10;
  if (coupon.length === 4) {
    setTextContentById(
      "TotalAmount",
      getTextContentById("TotalAmount", "float") + bonus,
    );
    getElement("coupon").value = "";
    addHistory("Get Bonus", `Get bonus $${bonus} from coupon number ${coupon}`);
  } else {
    alert("Invalid Coupon. Coupon must be length of 4");
  }
});
