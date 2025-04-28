const clorindeLoreButton = document.getElementById("CLore");
const clorindeQuickGuideButton = document.getElementById("CGuide");
const clorindeGalleryButton = document.getElementById("CGallery");
const clorindeMusicVideoButton = document.getElementById("CMusicVideo");
const clorindeDescription = document.getElementById("ClorindeDescription");
const clorindeQuickGuideImage = document.getElementById(
  "quickGuideImageClorinde"
);
const clorindeGallerySection = document.getElementById("ClorindeGallery");
const clorindeMusicVideoSection = document.getElementById(
  "ClorindeMusicVideoSection"
);
const clorindeoverview = document.getElementById("clorindeover");

clorindeLoreButton.onclick = function () {
  clorindeoverview.style.display = "none";
  clorindeDescription.style.display = "block";
  clorindeQuickGuideImage.style.display = "none";
  clorindeGallerySection.style.display = "none";
  clorindeMusicVideoSection.style.display = "none";
};

clorindeQuickGuideButton.onclick = function () {
  clorindeoverview.style.display = "none";
  clorindeDescription.style.display = "none";
  clorindeQuickGuideImage.style.display = "block";
  clorindeGallerySection.style.display = "none";
  clorindeMusicVideoSection.style.display = "none";
};

clorindeGalleryButton.onclick = function () {
   clorindeoverview.style.display = "none";
  clorindeDescription.style.display = "none";
  clorindeQuickGuideImage.style.display = "none";
  clorindeGallerySection.style.display = "block";
  clorindeMusicVideoSection.style.display = "none";
};

clorindeMusicVideoButton.onclick = function () {
   clorindeoverview.style.display = "none";
  clorindeDescription.style.display = "none";
  clorindeQuickGuideImage.style.display = "none";
  clorindeGallerySection.style.display = "none";
  clorindeMusicVideoSection.style.display = "block";
};
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#ClorindeGallery .gallery-grid img")
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
