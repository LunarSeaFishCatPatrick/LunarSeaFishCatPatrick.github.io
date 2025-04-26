const nahidaLoreButton = document.getElementById("NLore");
const nahidaQuickGuideButton = document.getElementById("NGuide");
const nahidaGalleryButton = document.getElementById("NGallery");
const nahidaMusicVideoButton = document.getElementById("NMusicVideo");
const nahidaDescription = document.getElementById("NahidaDescription");
const nahidaQuickGuideImage = document.getElementById("quickGuideImageNahida");
const nahidaGallerySection = document.getElementById("NahidaGallery");
const nahidaMusicVideoSection = document.getElementById(
  "NahidaMusicVideoSection"
);
const nahidaOverview = document.getElementById("nahidaover");

nahidaLoreButton.onclick = function () {
  nahidaDescription.style.display = "block";
  nahidaQuickGuideImage.style.display = "none";
  nahidaGallerySection.style.display = "none";
  nahidaMusicVideoSection.style.display = "none";
  nahidaOverview.style.display = "none";
};

nahidaQuickGuideButton.onclick = function () {
  nahidaDescription.style.display = "none";
  nahidaQuickGuideImage.style.display = "block";
  nahidaGallerySection.style.display = "none";
  nahidaMusicVideoSection.style.display = "none";
  nahidaOverview.style.display = "none";
};

nahidaGalleryButton.onclick = function () {
  nahidaOverview.style.display = "none";
  nahidaDescription.style.display = "none";
  nahidaQuickGuideImage.style.display = "none";
  nahidaGallerySection.style.display = "block";
  nahidaMusicVideoSection.style.display = "none";
};

nahidaMusicVideoButton.onclick = function () {
  nahidaDescription.style.display = "none";
  nahidaOverview.style.display = "none";
  nahidaQuickGuideImage.style.display = "none";
  nahidaGallerySection.style.display = "none";
  nahidaMusicVideoSection.style.display = "block";
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#NahidaGallery .gallery-grid img")
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
