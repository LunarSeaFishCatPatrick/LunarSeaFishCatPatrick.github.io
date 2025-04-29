const citlaliLoreButton = document.getElementById("citlaliLore");
const citlaliQuickGuideButton = document.getElementById("citlaliGuide");
const citlaliGalleryButton = document.getElementById("citlaliGalleryBtn");
const citlaliMusicVideoButton = document.getElementById("citlaliMusicVideo");
const citlaliDescription = document.getElementById("citlaliDescription");
const citlaliQuickGuideImage = document.getElementById("quickGuideImageCitlali");
const citlaliGallerySection = document.getElementById("citlaliGallery");
const citlaliMusicVideoSection = document.getElementById("citlaliMusicVideoSection");
const citlaliOverview = document.getElementById("citlaliOverview");

citlaliLoreButton.onclick = function () {
  citlaliDescription.style.display = "block";
  citlaliQuickGuideImage.style.display = "none";
  citlaliGallerySection.style.display = "none";
  citlaliMusicVideoSection.style.display = "none";
  citlaliOverview.style.display = "none";
};

citlaliQuickGuideButton.onclick = function () {
  citlaliDescription.style.display = "none";
  citlaliQuickGuideImage.style.display = "block";
  citlaliGallerySection.style.display = "none";
  citlaliMusicVideoSection.style.display = "none";
  citlaliOverview.style.display = "none";
};

citlaliGalleryButton.onclick = function () {
  citlaliDescription.style.display = "none";
  citlaliQuickGuideImage.style.display = "none";
  citlaliGallerySection.style.display = "block";
  citlaliMusicVideoSection.style.display = "none";
  citlaliOverview.style.display = "none";
};

citlaliMusicVideoButton.onclick = function () {
  citlaliDescription.style.display = "none";
  citlaliQuickGuideImage.style.display = "none";
  citlaliGallerySection.style.display = "none";
  citlaliMusicVideoSection.style.display = "block";
  citlaliOverview.style.display = "none";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#citlaliGallery .gallery-grid img")
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
