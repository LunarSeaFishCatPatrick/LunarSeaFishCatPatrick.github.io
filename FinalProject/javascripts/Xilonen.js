const xilonenLoreButton = document.getElementById("xilonenLore");
const xilonenQuickGuideButton = document.getElementById("xilonenGuide");
const xilonenGalleryButton = document.getElementById("xilonenGalleryBtn");
const xilonenMusicVideoButton = document.getElementById("xilonenMusicVideo");
const xilonenDescription = document.getElementById("xilonenDescription");
const xilonenQuickGuideImage = document.getElementById("quickGuideImageXilonen");
const xilonenGallerySection = document.getElementById("xilonenGallery");
const xilonenMusicVideoSection = document.getElementById("xilonenMusicVideoSection");
const xilonenOverview = document.getElementById("xilonenOverview");

xilonenLoreButton.onclick = function () {
  xilonenDescription.style.display = "block";
  xilonenQuickGuideImage.style.display = "none";
  xilonenGallerySection.style.display = "none";
  xilonenMusicVideoSection.style.display = "none";
  xilonenOverview.style.display = "none";
};

xilonenQuickGuideButton.onclick = function () {
  xilonenDescription.style.display = "none";
  xilonenQuickGuideImage.style.display = "block";
  xilonenGallerySection.style.display = "none";
  xilonenMusicVideoSection.style.display = "none";
  xilonenOverview.style.display = "none";
};

xilonenGalleryButton.onclick = function () {
  xilonenDescription.style.display = "none";
  xilonenQuickGuideImage.style.display = "none";
  xilonenGallerySection.style.display = "block";
  xilonenMusicVideoSection.style.display = "none";
  xilonenOverview.style.display = "none";
};

xilonenMusicVideoButton.onclick = function () {
  xilonenDescription.style.display = "none";
  xilonenQuickGuideImage.style.display = "none";
  xilonenGallerySection.style.display = "none";
  xilonenMusicVideoSection.style.display = "block";
  xilonenOverview.style.display = "none";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#xilonenGallery .gallery-grid img")
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
