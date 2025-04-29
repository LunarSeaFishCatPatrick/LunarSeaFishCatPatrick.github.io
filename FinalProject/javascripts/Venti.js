const ventiLoreButton = document.getElementById("ventiLore");
const ventiQuickGuideButton = document.getElementById("ventiGuide");
const ventiGalleryButton = document.getElementById("ventiGalleryBtn");
const ventiMusicVideoButton = document.getElementById("ventiMusicVideo");
const ventiDescription = document.getElementById("ventiDescription");
const ventiQuickGuideImage = document.getElementById("quickGuideImageVenti");
const ventiGallerySection = document.getElementById("ventiGallery");
const ventiMusicVideoSection = document.getElementById("ventiMusicVideoSection");
const ventiOverview = document.getElementById("ventiOverview");

ventiLoreButton.onclick = function () {
  ventiDescription.style.display = "block";
  ventiQuickGuideImage.style.display = "none";
  ventiGallerySection.style.display = "none";
  ventiMusicVideoSection.style.display = "none";
  ventiOverview.style.display = "none";
};

ventiQuickGuideButton.onclick = function () {
  ventiDescription.style.display = "none";
  ventiQuickGuideImage.style.display = "block";
  ventiGallerySection.style.display = "none";
  ventiMusicVideoSection.style.display = "none";
  ventiOverview.style.display = "none";
};

ventiGalleryButton.onclick = function () {
  ventiDescription.style.display = "none";
  ventiQuickGuideImage.style.display = "none";
  ventiGallerySection.style.display = "block";
  ventiMusicVideoSection.style.display = "none";
  ventiOverview.style.display = "none";
};

ventiMusicVideoButton.onclick = function () {
  ventiDescription.style.display = "none";
  ventiQuickGuideImage.style.display = "none";
  ventiGallerySection.style.display = "none";
  ventiMusicVideoSection.style.display = "block";
  ventiOverview.style.display = "none";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#ventiGallery .gallery-grid img")
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
