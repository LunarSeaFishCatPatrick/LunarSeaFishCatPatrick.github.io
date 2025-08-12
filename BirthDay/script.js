const wrapper = document.getElementById("wrapper");
const envelope1 = document.getElementById("envelope1");
const btn = document.getElementById("lightCandlesBtn");
const candlesContainer = document.querySelector(".candles");
const letterContent = document.getElementById("letterContent");
const finalMessage = document.getElementById("finalMessage");
const ageInput = document.getElementById("ageInput"); // ✅ Get age input element

// Open envelope animation
wrapper.onclick = function () {
  wrapper.classList.add("open");

  setTimeout(() => {
    wrapper.classList.add("scaled");
  }, 1500);

  setTimeout(() => {
    envelope1.style.display = "none";
  }, 2500);
};

// Handle candle logic
btn.addEventListener("click", () => {
  const age = parseInt(ageInput.value); // ✅ Use age from input
  if (!age || age < 1 || age > 120) {
    alert("Please enter a valid age between 1 and 120");
    return;
  }

  candlesContainer.innerHTML = "";

  const radius = 130;
  const centerX = 100;
  const centerY = 140;

  for (let i = 0; i < age; i++) {
    const angle = ((2 * Math.PI) / age) * i - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const candle = document.createElement("div");
    candle.classList.add("candle");
    candle.style.left = `${x}px`;
    candle.style.top = `${y}px`;
    candle.style.transform = "translate(-50%, 0);";

    const flame = document.createElement("div");
    flame.classList.add("flame");
    candle.appendChild(flame);

    candlesContainer.appendChild(candle);
  }

  const flames = candlesContainer.querySelectorAll(".flame");
  let idx = 0;

  function extinguishNext() {
    if (idx < flames.length) {
      flames[idx].style.animation = "none";
      flames[idx].style.opacity = "0";
      idx++;
      setTimeout(extinguishNext, 500);
    } else {
      setTimeout(() => showFinalMessage(age), 1000); // ✅ Pass age to message
    }
  }

  extinguishNext();
});

// Show birthday message
function showFinalMessage(age) {
  letterContent.style.opacity = "0";

  setTimeout(() => {
    document.querySelector(".letter").style.display = "none";
    finalMessage.style.display = "block";
    wrapper.style.backgroundColor = "transparent";

    // ✅ Age is now dynamic
    const message = `Happy ${age}th Birthday Ate🎉
Wishing you a day filled with love, joy, and all the things that make you smile. You are an amazing sister, and I am so grateful to have you in my life. May this year bring you closer to your dreams and surround you with happiness. Enjoy your special day!`;

    const textElement = document.getElementById("typewriterText");
    textElement.textContent = ""; // Reset before typing
    let index = 0;

    function typeWriter() {
      if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
      } else {
        const sisterPhoto = document.getElementById("sisterPhoto");
        sisterPhoto.style.opacity = "1";
      }
    }

    typeWriter();
  }, 1000);
}
