const naviaLoreButton = document.getElementById("NLore");
const naviaQuickGuideButton = document.getElementById("NGuide");
const naviaGalleryButton = document.getElementById("NGallery");
const naviaMusicVideoButton = document.getElementById("NMusicVideo");
const naviaDescription = document.getElementById("NaviaDescription");
const naviaQuickGuideImage = document.getElementById("quickGuideImageNavia");
const naviaGallerySection = document.getElementById("NaviaGallery");
const naviaMusicVideoSection = document.getElementById(
  "NaviaMusicVideoSection"
);
const naviaOverview = document.getElementById("naviaover");

naviaLoreButton.onclick = function () {
  naviaDescription.style.display = "block";
  naviaQuickGuideImage.style.display = "none";
  naviaGallerySection.style.display = "none";
  naviaMusicVideoSection.style.display = "none";
  naviaOverview.style.display = "none";
};

naviaQuickGuideButton.onclick = function () {
  naviaDescription.style.display = "none";
  naviaQuickGuideImage.style.display = "block";
  naviaGallerySection.style.display = "none";
  naviaMusicVideoSection.style.display = "none";
  naviaOverview.style.display = "none";
};

naviaGalleryButton.onclick = function () {
  naviaOverview.style.display = "none";
  naviaDescription.style.display = "none";
  naviaQuickGuideImage.style.display = "none";
  naviaGallerySection.style.display = "block";
  naviaMusicVideoSection.style.display = "none";
};

naviaMusicVideoButton.onclick = function () {
  naviaDescription.style.display = "none";
  naviaOverview.style.display = "none";
  naviaQuickGuideImage.style.display = "none";
  naviaGallerySection.style.display = "none";
  naviaMusicVideoSection.style.display = "block";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#NaviaGallery .gallery-grid img")
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
