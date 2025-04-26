const arleLoreButton = document.getElementById("arleLore");
const arleQuickGuideButton = document.getElementById("arleGuide");
const arleGalleryButton = document.getElementById("arleGalleryBtn");
const arleMusicVideoButton = document.getElementById("arleMusicVideo");
const arleDescription = document.getElementById("arleDescription");
const arleQuickGuideImage = document.getElementById("quickGuideImagearle");
const arleGallerySection = document.getElementById("arleGallery");
const arleMusicVideoSection = document.getElementById("arleMusicVideoSection");
const arleOverview = document.getElementById("arlenover");

arleLoreButton.onclick = function () {
  arleDescription.style.display = "block";
  arleQuickGuideImage.style.display = "none";
  arleGallerySection.style.display = "none";
  arleMusicVideoSection.style.display = "none";
  arleOverview.style.display = "none";
};

arleQuickGuideButton.onclick = function () {
  arleDescription.style.display = "none";
  arleQuickGuideImage.style.display = "block";
  arleGallerySection.style.display = "none";
  arleMusicVideoSection.style.display = "none";
  arleOverview.style.display = "none";
};

arleGalleryButton.onclick = function () {
  arleDescription.style.display = "none";
  arleQuickGuideImage.style.display = "none";
  arleGallerySection.style.display = "block";
  arleMusicVideoSection.style.display = "none";
  arleOverview.style.display = "none";
};

arleMusicVideoButton.onclick = function () {
  arleDescription.style.display = "none";
  arleQuickGuideImage.style.display = "none";
  arleGallerySection.style.display = "none";
  arleMusicVideoSection.style.display = "block";
  arleOverview.style.display = "none";
};
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#arleGallery .gallery-grid img")
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
