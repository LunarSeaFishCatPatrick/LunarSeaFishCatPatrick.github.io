const mavuikaLoreButton = document.getElementById("MLore");
const mavuikaQuickGuideButton = document.getElementById("MGuide");
const mavuikaGalleryButton = document.getElementById("MGallery");
const mavuikaMusicVideoButton = document.getElementById("MMusicVideo");
const mavuikaDescription = document.getElementById("MavuikaDescription");
const mavuikaQuickGuideImage = document.getElementById("quickGuideImageMavuika");
const mavuikaGallerySection = document.getElementById("MavuikaGallery");
const mavuikaMusicVideoSection = document.getElementById(
  "MavuikaMusicVideoSection"
);
const mavuikaOverview = document.getElementById("mavuikaover");

mavuikaLoreButton.onclick = function () {

  mavuikaDescription.style.display = "block";
  mavuikaQuickGuideImage.style.display = "none";
  mavuikaGallerySection.style.display = "none";
  mavuikaMusicVideoSection.style.display = "none";
  mavuikaOverview.style.display = "none";
};

mavuikaQuickGuideButton.onclick = function () {
  mavuikaDescription.style.display = "none";
  mavuikaQuickGuideImage.style.display = "block";
  mavuikaGallerySection.style.display = "none";
  mavuikaMusicVideoSection.style.display = "none";
  mavuikaOverview.style.display = "none";
};

mavuikaGalleryButton.onclick = function () {
  mavuikaOverview.style.display = "none";
  mavuikaDescription.style.display = "none";
  mavuikaQuickGuideImage.style.display = "none";
  mavuikaGallerySection.style.display = "block";
  mavuikaMusicVideoSection.style.display = "none";
};

mavuikaMusicVideoButton.onclick = function () {
  mavuikaDescription.style.display = "none";
  mavuikaOverview.style.display = "none";
  mavuikaQuickGuideImage.style.display = "none";
  mavuikaGallerySection.style.display = "none";
  mavuikaMusicVideoSection.style.display = "block";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#MavuikaGallery .gallery-grid img")
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
