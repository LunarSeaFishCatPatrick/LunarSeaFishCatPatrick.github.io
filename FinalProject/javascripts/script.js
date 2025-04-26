const loreButton = document.getElementById("Lore");
const quickGuideButton = document.getElementById("Guide");
const galleryButton = document.getElementById("Gallery");
const musicVideoButton = document.getElementById("Music/Video");
const furinaDescription = document.getElementById("furinades");
const quickGuideImage = document.getElementById("quickGuideImage");
const gallerySection = document.getElementById("gallery");
const furinadis = document.getElementById("furinadis");
const musicVideoSection = document.getElementById("musicVideoSection");

loreButton.onclick = function () {
  furinaDescription.style.display = "block";
  quickGuideImage.style.display = "none";
  gallerySection.style.display = "none";
  musicVideoSection.style.display = "none";
  furinadis.style.display = "none";
};

quickGuideButton.onclick = function () {
  furinaDescription.style.display = "none";
  quickGuideImage.style.display = "block";
  gallerySection.style.display = "none";
  musicVideoSection.style.display = "none";
  furinadis.style.display = "none";
};

galleryButton.onclick = function () {
  furinadis.style.display = "none";
  furinaDescription.style.display = "none";
  quickGuideImage.style.display = "none";
  gallerySection.style.display = "block";
  musicVideoSection.style.display = "none";
  furinadis.style.display = "none";
};

musicVideoButton.onclick = function () {
  furinaDescription.style.display = "none";
  quickGuideImage.style.display = "none";
  furinadis.style.display = "none";
  gallerySection.style.display = "none";
  furinadis.style.display = "none";
  musicVideoSection.style.display = "block";
};
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#gallery img")
).slice(0, 8);
let currentImgIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImgIndex = index;
    openModal();
  });
});

function openModal() {
  modal.style.display = "flex";
  modalImg.src = galleryImages[currentImgIndex].src;
}

function showNextImage() {
  currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
  openModal();
}

function showPrevImage() {
  currentImgIndex =
    (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
  openModal();
}

nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
