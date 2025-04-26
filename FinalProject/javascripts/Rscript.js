const raidenLoreButton = document.getElementById("RLore");
const raidenQuickGuideButton = document.getElementById("RGuide");
const raidenGalleryButton = document.getElementById("RGallery");
const raidenMusicVideoButton = document.getElementById("RMusicVideo");
const raidenDescription = document.getElementById("RaidenDescription");
const raidenQuickGuideImage = document.getElementById("quickGuideImageRaiden");
const raidenGallerySection = document.getElementById("RaidenGallery");
const raidenMusicVideoSection = document.getElementById(
  "RaidenMusicVideoSection"
);
const raidenoverview = document.getElementById("raidenover");

raidenLoreButton.onclick = function () {
  raidenDescription.style.display = "block";
  raidenQuickGuideImage.style.display = "none";
  raidenGallerySection.style.display = "none";
  raidenMusicVideoSection.style.display = "none";
  raidenoverview.style.display = "none";
};

raidenQuickGuideButton.onclick = function () {
  raidenDescription.style.display = "none";
  raidenQuickGuideImage.style.display = "block";
  raidenGallerySection.style.display = "none";
  raidenMusicVideoSection.style.display = "none";
  raidenoverview.style.display = "none";
};

raidenGalleryButton.onclick = function () {
  raidenoverview.style.display = "none";
  raidenDescription.style.display = "none";
  raidenQuickGuideImage.style.display = "none";
  raidenGallerySection.style.display = "block";
  raidenMusicVideoSection.style.display = "none";
};

raidenMusicVideoButton.onclick = function () {
  raidenDescription.style.display = "none";
  raidenoverview.style.display = "none";
  raidenQuickGuideImage.style.display = "none";
  raidenGallerySection.style.display = "none";
  raidenMusicVideoSection.style.display = "block";
};
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#RaidenGallery .gallery-grid img")
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
