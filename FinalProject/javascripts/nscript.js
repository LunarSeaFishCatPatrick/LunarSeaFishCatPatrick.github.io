const neuviLoreButton = document.getElementById("NLore");
const neuviQuickGuideButton = document.getElementById("NGuide");
const neuviGalleryButton = document.getElementById("NGallery");
const neuviMusicVideoButton = document.getElementById("NMusicVideo");
const neuviDescription = document.getElementById("NeuvilletteDescription");
const neuviGallerySection = document.getElementById("NeuviGallery");
const neuviMusicVideoSection = document.getElementById("musicVideoSection");
const quickGuideImage = document.getElementById("quickGuideImageNeuvillette");
const neuvioverview = document.getElementById("neuvover");

neuviLoreButton.onclick = function () {
  neuviDescription.style.display = "block";
  quickGuideImage.style.display = "none";
  neuviGallerySection.style.display = "none";
  neuviMusicVideoSection.style.display = "none";
  musicVideoSection.style.display = "none";
  neuvioverview.style.display = "none";
};

neuviQuickGuideButton.onclick = function () {
  quickGuideImage.style.display = "block";
  neuviDescription.style.display = "none";
  neuviGallerySection.style.display = "none";
  neuviMusicVideoSection.style.display = "none";
  musicVideoSection.style.display = "none";
  neuvioverview.style.display = "none";
};

neuviGalleryButton.onclick = function () {
  quickGuideImage.style.display = "none";
  neuviDescription.style.display = "none";
  musicVideoSection.style.display = "none";
  neuvioverview.style.display = "none";
  neuviGallerySection.style.display = "block";
};

neuviMusicVideoButton.onclick = function () {
  neuvioverview.style.display = "none";
  neuviDescription.style.display = "none";
  neuviGallerySection.style.display = "none";
  neuviMusicVideoSection.style.display = "block";
  quickGuideImage.style.display = "none";
};
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#NeuviGallery .gallery-grid img")
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
