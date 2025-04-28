const mavuikaLoreButton = document.getElementById("mavuikaLore");
const mavuikaQuickGuideButton = document.getElementById("mavuikaGuide");
const mavuikaGalleryButton = document.getElementById("mavuikaGalleryBtn");
const mavuikaMusicVideoButton = document.getElementById("mavuikaMusicVideo");
const mavuikaDescription = document.getElementById("mavuikaDescription");
const mavuikaQuickGuideImage = document.getElementById(
  "quickGuideImagemavuika"
);
const mavuikaGallerySection = document.getElementById("mavuikaGallery");
const mavuikaMusicVideoSection = document.getElementById(
  "mavuikaMusicVideoSection"
);
const mavuikaOverview = document.getElementById("mavuikanover");

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
  mavuikaDescription.style.display = "none";
  mavuikaQuickGuideImage.style.display = "none";
  mavuikaGallerySection.style.display = "block";
  mavuikaMusicVideoSection.style.display = "none";
  mavuikaOverview.style.display = "none";
};

mavuikaMusicVideoButton.onclick = function () {
  mavuikaDescription.style.display = "none";
  mavuikaQuickGuideImage.style.display = "none";
  mavuikaGallerySection.style.display = "none";
  mavuikaMusicVideoSection.style.display = "block";
  mavuikaOverview.style.display = "none";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#mavuikaGallery .gallery-grid img")
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
