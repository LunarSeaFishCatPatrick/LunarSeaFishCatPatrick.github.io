const zhongliLoreButton = document.getElementById("zhongliLore");
const zhongliQuickGuideButton = document.getElementById("zhongliGuide");
const zhongliGalleryButton = document.getElementById("zhongliGalleryBtn");
const zhongliMusicVideoButton = document.getElementById("zhongliMusicVideo");
const zhongliDescription = document.getElementById("zhongliDescription");
const zhongliQuickGuideImage = document.getElementById("quickGuideImageZhongli");
const zhongliGallerySection = document.getElementById("zhongliGallery");
const zhongliMusicVideoSection = document.getElementById("zhongliMusicVideoSection");
const zhongliOverview = document.getElementById("zhongliOverview");

zhongliLoreButton.onclick = function () {
  zhongliDescription.style.display = "block";
  zhongliQuickGuideImage.style.display = "none";
  zhongliGallerySection.style.display = "none";
  zhongliMusicVideoSection.style.display = "none";
  zhongliOverview.style.display = "none";
};

zhongliQuickGuideButton.onclick = function () {
  zhongliDescription.style.display = "none";
  zhongliQuickGuideImage.style.display = "block";
  zhongliGallerySection.style.display = "none";
  zhongliMusicVideoSection.style.display = "none";
  zhongliOverview.style.display = "none";
};

zhongliGalleryButton.onclick = function () {
  zhongliDescription.style.display = "none";
  zhongliQuickGuideImage.style.display = "none";
  zhongliGallerySection.style.display = "block";
  zhongliMusicVideoSection.style.display = "none";
  zhongliOverview.style.display = "none";
};

zhongliMusicVideoButton.onclick = function () {
  zhongliDescription.style.display = "none";
  zhongliQuickGuideImage.style.display = "none";
  zhongliGallerySection.style.display = "none";
  zhongliMusicVideoSection.style.display = "block";
  zhongliOverview.style.display = "none";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#zhongliGallery .gallery-grid img")
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
