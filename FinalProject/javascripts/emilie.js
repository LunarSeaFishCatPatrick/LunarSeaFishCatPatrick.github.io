const emilieLoreButton = document.getElementById("ELore");
const emilieQuickGuideButton = document.getElementById("EGuide");
const emilieGalleryButton = document.getElementById("EGallery");
const emilieMusicVideoButton = document.getElementById("EMusicVideo");

const emilieDescription = document.getElementById("EmilieDescription");
const emilieQuickGuideImage = document.getElementById("quickGuideImageEmilie");
const emilieGallerySection = document.getElementById("EmilieGallery");
const emilieMusicVideoSection = document.getElementById(
  "EmilieMusicVideoSection"
);
const emilieOverview = document.getElementById("emilieover");

// Button click handlers
emilieLoreButton.onclick = function () {
  emilieDescription.style.display = "block";
  emilieQuickGuideImage.style.display = "none";
  emilieGallerySection.style.display = "none";
  emilieMusicVideoSection.style.display = "none";
  emilieOverview.style.display = "none";
};

emilieQuickGuideButton.onclick = function () {
  emilieDescription.style.display = "none";
  emilieQuickGuideImage.style.display = "block";
  emilieGallerySection.style.display = "none";
  emilieMusicVideoSection.style.display = "none";
  emilieOverview.style.display = "none";
};

emilieGalleryButton.onclick = function () {
  emilieDescription.style.display = "none";
  emilieQuickGuideImage.style.display = "none";
  emilieGallerySection.style.display = "block";
  emilieMusicVideoSection.style.display = "none";
  emilieOverview.style.display = "none";
};

emilieMusicVideoButton.onclick = function () {
  emilieDescription.style.display = "none";
  emilieQuickGuideImage.style.display = "none";
  emilieGallerySection.style.display = "none";
  emilieMusicVideoSection.style.display = "block";
  emilieOverview.style.display = "none";
};

// Modal functionality for gallery images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#EmilieGallery .gallery-grid img")
);

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
