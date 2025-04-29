const chascaLoreButton = document.getElementById("chascaLore");
const chascaQuickGuideButton = document.getElementById("chascaGuide");
const chascaGalleryButton = document.getElementById("chascaGalleryBtn");
const chascaMusicVideoButton = document.getElementById("chascaMusicVideo");
const chascaDescription = document.getElementById("chascaDescription");
const chascaQuickGuideImage = document.getElementById("quickGuideImageChasca");
const chascaGallerySection = document.getElementById("chascaGallery");
const chascaMusicVideoSection = document.getElementById("chascaMusicVideoSection");
const chascaOverview = document.getElementById("chascaOverview");

chascaLoreButton.onclick = function () {
  chascaDescription.style.display = "block";
  chascaQuickGuideImage.style.display = "none";
  chascaGallerySection.style.display = "none";
  chascaMusicVideoSection.style.display = "none";
  chascaOverview.style.display = "none";
};

chascaQuickGuideButton.onclick = function () {
  chascaDescription.style.display = "none";
  chascaQuickGuideImage.style.display = "block";
  chascaGallerySection.style.display = "none";
  chascaMusicVideoSection.style.display = "none";
  chascaOverview.style.display = "none";
};

chascaGalleryButton.onclick = function () {
  chascaDescription.style.display = "none";
  chascaQuickGuideImage.style.display = "none";
  chascaGallerySection.style.display = "block";
  chascaMusicVideoSection.style.display = "none";
  chascaOverview.style.display = "none";
};

chascaMusicVideoButton.onclick = function () {
  chascaDescription.style.display = "none";
  chascaQuickGuideImage.style.display = "none";
  chascaGallerySection.style.display = "none";
  chascaMusicVideoSection.style.display = "block";
  chascaOverview.style.display = "none";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#chascaGallery .gallery-grid img")
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
