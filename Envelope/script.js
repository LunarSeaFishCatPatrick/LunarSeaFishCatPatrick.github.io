document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const toggle = document.getElementById("toggle");
  const card = document.getElementById("card");
  const typewriterText = document.getElementById("typewriter-text");
  const nextBtn = document.getElementById("next-btn");
  const valentineQuestion = document.getElementById("valentine-question");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");

  if (!envelope || !toggle || !card) {
    console.error("Required elements not found. Check your HTML.");
    return;
  }

  const fullText = `Happy Valentine's Day, Gie!

Gusto ko lang sabihin na sobrang special mo sa akin. I mean it Salamat sa lahat ng happy moments natin na talagang nagpapasaya ng araw ko. Kahit lose streak tayo sa ML, it feels good and safe pa rin kasi ikaw ang kalaro ko, same din sa pag-explore natin sa Genshin.

Thank you rin sa pag-watch ng stream ko lalo na nung simula na marami pa akong technical problems, salamat kasi naging patient ka at nanatili ka lang doon. Salamat sa pag-notice ng small details about me and for listening to all my yaps at mga crazy things na sinasabi ko. It really means a lot to me na nandiyan ka.

Alam kong mabigat ang mga iniisip mo lately gaya ng pressure sa job hunt at yung mga 3 AM thoughts na nagpapanatili sayong gising. Pero i believe you can do it.

Nandito lang ako para sayo. Kung kailangan mo ng kausap, mag vent, o kahit tumahimik lang muna kapag masyadong maingay ang isip mo, dito lang ako para samahan ka. Chat mo lang ako sa TikTok, Discord, ML, or any soc med.

Actually, may isa pa sana akong gustong sabihin sayo. If okay lang, gusto sana kitang makausap mamayang gabi sa Discord. Gusto ko sanang maging official sayo na liligawan kita.
-Patrick Angelo`;

  let currentIndex = 0;
  let isTyping = false;
  let noClickCount = 0;

  function typeWriter() {
    if (currentIndex < fullText.length) {
      typewriterText.textContent += fullText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeWriter, 30);
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  function startTypewriter() {
    if (!isTyping) {
      isTyping = true;
      typewriterText.textContent = "";
      currentIndex = 0;
      nextBtn.classList.add("hidden");
      valentineQuestion.classList.add("hidden");
      noClickCount = 0;
      yesBtn.classList.remove(
        "enlarged",
        "enlarged-2",
        "enlarged-3",
        "enlarged-4",
      );
      yesBtn.textContent = "Yes ";
      yesBtn.style.display = "block";
      noBtn.textContent = "No ";
      noBtn.style.display = "block";
      noBtn.style.background = "#ba88f2";
      typeWriter();
    }
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    envelope.classList.toggle("open");
    if (envelope.classList.contains("open")) {
      isTyping = false;
      startTypewriter();
    }
  });

  card.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  nextBtn.addEventListener("click", () => {
    typewriterText.classList.add("hidden");
    nextBtn.classList.add("hidden");
    valentineQuestion.classList.remove("hidden");
    noClickCount = 0;
  });

  yesBtn.addEventListener("click", () => {
    // Redirect to the flowers page
    window.location.href = "flower.html";
  });

  noBtn.addEventListener("click", () => {
    noClickCount++;
    noBtn.style.animation = "none"; // Reset dodge animation
    setTimeout(() => (noBtn.style.animation = ""), 10); // Re-trigger

    if (noClickCount === 1) {
      yesBtn.classList.add("enlarged");
    } else if (noClickCount === 2) {
      yesBtn.classList.add("enlarged-2");
    } else if (noClickCount === 3) {
      yesBtn.classList.add("enlarged-3");
      noBtn.style.display = "none"; // Hide No button after 3 clicks
    }
  });
});

