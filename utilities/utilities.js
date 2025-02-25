function getInputValueById(id, flag = false) {
  if (flag === "int") return parseInt(document.getElementById(id).value);
  else if (flag === "float")
    return parseFloat(document.getElementById(id).value);
  return document.getElementById(id).value;
}

function getTextContentById(id, flag = false) {
  if (flag === "int") return parseInt(document.getElementById(id).textContent);
  else if (flag === "float")
    return parseFloat(document.getElementById(id).textContent);
  return document.getElementById(id).textContent;
}

function getElement(id) {
  return document.getElementById(id);
}

function setTextContentById(id, value) {
  document.getElementById(id).textContent = value;
}

function addHistory(title, description) {
  const historyContainer = document.getElementById("history-container");
  const historyElement = document.createElement("div");
  historyElement.innerHTML = `
  <div class="history items-center flex rounded-2xl py-3 pl-4">
            <div class="mr-2">
              <img class="w-12 h-auto rounded-full bg-gray-200 p-2" src="./assets/wallet.png" />
            </div>
            <div tabindex="0" class="collapse-plus collapse">
              <div class="collapse-title">
                <h3>${title}</h3>
                <p>${getCurrentDateTime()}</p>
              </div>
              <div class="collapse-content">${description}</div>
            </div>
          </div>
  `;
  historyContainer.prepend(historyElement);
};


function getCurrentDateTime(){
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0"); // Adds leading zero if needed
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}-${month}-${year}  ${hours}:${minutes}`;
}