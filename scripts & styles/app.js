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

// ADDED TIME
function addCall(serviceName, number) {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const historyItem = document.createElement("div");

  historyItem.classList.add("bg-gray-100", "p-3", "rounded-md", "shadow-sm");

  historyItem.innerHTML = `
    <div class="flex justify-between items-start">
      <div>
        <h4 class="font-semibold text-gray-800">${serviceName}</h4>
        <p class="text-sm text-gray-500">${number}</p>
      </div>
      <span class="text-xs text-gray-500">${timeString}</span>
    </div>
  `;

  callHistory.prepend(historyItem);
}

// HEART BUTTONS FUNCTIONALITY
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
