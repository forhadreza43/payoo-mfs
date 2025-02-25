document.getElementById("btn-login").addEventListener("click", (event) => {
  event.preventDefault();
  const phone = document.getElementById("user-phone").value;
  const pin = document.getElementById("user-pin").value;
  if (phone.length === 11) {
    if (pin === "1234") {
      window.location.href = "./main.html";
    } else {
      alert("Invalid Pin");
    }
  } else {
    alert("Invalid Phone Number");
  }
});
