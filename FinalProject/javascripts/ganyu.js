const ganyuLoreButton = document.getElementById("GLore");
const ganyuQuickGuideButton = document.getElementById("GGuide");
const ganyuGalleryButton = document.getElementById("GGallery");
const ganyuMusicVideoButton = document.getElementById("GMusicVideo");
const ganyuDescription = document.getElementById("GanyuDescription");
const ganyuQuickGuideImage = document.getElementById("quickGuideImageGanyu");
const ganyuGallerySection = document.getElementById("GanyuGallery");
const ganyuMusicVideoSection = document.getElementById(
  "GanyuMusicVideoSection"
);
const ganyuOverview = document.getElementById("ganyuover");

ganyuLoreButton.onclick = function () {
  ganyuDescription.style.display = "block";
  ganyuQuickGuideImage.style.display = "none";
  ganyuGallerySection.style.display = "none";
  ganyuMusicVideoSection.style.display = "none";
  ganyuOverview.style.display = "none";
};

ganyuQuickGuideButton.onclick = function () {
  ganyuDescription.style.display = "none";
  ganyuQuickGuideImage.style.display = "block";
  ganyuGallerySection.style.display = "none";
  ganyuMusicVideoSection.style.display = "none";
  ganyuOverview.style.display = "none";
};

ganyuGalleryButton.onclick = function () {
  ganyuOverview.style.display = "none";
  ganyuDescription.style.display = "none";
  ganyuQuickGuideImage.style.display = "none";
  ganyuGallerySection.style.display = "block";
  ganyuMusicVideoSection.style.display = "none";
};

ganyuMusicVideoButton.onclick = function () {
  ganyuDescription.style.display = "none";
  ganyuOverview.style.display = "none";
  ganyuQuickGuideImage.style.display = "none";
  ganyuGallerySection.style.display = "none";
  ganyuMusicVideoSection.style.display = "block";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#GanyuGallery .gallery-grid img")
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
