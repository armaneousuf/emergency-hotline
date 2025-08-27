const coinCount = document.getElementById("coin-value");
const heartCount = document.getElementById("heart-count");
const copyCount = document.getElementById("copy-value");
const callHistory = document.getElementById("call-history-list");
const clearBtn = document.getElementById("clear-history-btn");

let coins = 100;
let hearts = 0;
let copies = 0;

// NAVBAR FUNCTIONALITY;
function updateDisplay() {
  coinCount.innerText = coins;
  heartCount.innerText = "❤️ " + hearts;
  copyCount.innerText = copies;
}

function addCall(serviceName, number) {
  const p = document.createElement("p");
  p.innerText = serviceName + " (" + number + ")";
  callHistory.prepend(p);
}

// Heart buttons
const allHearts = document.getElementsByClassName("heart-btn");
for (const btn of allHearts) {
  btn.addEventListener("click", function () {
    hearts++;
    updateDisplay();
  });
}

const allCalls = document.getElementsByClassName("call-btn");
for (const btn of allCalls) {
  btn.addEventListener("click", function () {
    const serviceName = btn.getAttribute("data-service-name");
    const number = btn.getAttribute("data-number");

    if (coins < 20) {
      alert("Not enough coins!");
      return;
    }

    coins -= 20;
    updateDisplay();
    alert("Calling " + serviceName + " at " + number);
    addCall(serviceName, number);
  });
}

// COPY BUTTONS
const allCopies = document.getElementsByClassName("copy-btn");
for (const btn of allCopies) {
  btn.addEventListener("click", function () {
    const number = btn.getAttribute("data-number");
    navigator.clipboard.writeText(number);
    alert("Copied " + number);
    copies++;
    updateDisplay();
  });
}

// CLEAR HISTORY
clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
  alert("History cleared!");
});
updateDisplay();
