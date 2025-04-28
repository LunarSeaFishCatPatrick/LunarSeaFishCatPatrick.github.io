const eulaLoreButton = document.getElementById("ELore");
const eulaQuickGuideButton = document.getElementById("EGuide");
const eulaGalleryButton = document.getElementById("EGallery");
const eulaMusicVideoButton = document.getElementById("EMusicVideo");

const eulaDescription = document.getElementById("EulaDescription");
const eulaQuickGuideImage = document.getElementById("quickGuideImageEula");
const eulaGallerySection = document.getElementById("EulaGallery");
const eulaMusicVideoSection = document.getElementById("EulaMusicVideoSection");
const eulaOverview = document.getElementById("eulaover");

// Button click handlers
eulaLoreButton.onclick = function () {
  eulaDescription.style.display = "block";
  eulaQuickGuideImage.style.display = "none";
  eulaGallerySection.style.display = "none";
  eulaMusicVideoSection.style.display = "none";
  eulaOverview.style.display = "none";
};

eulaQuickGuideButton.onclick = function () {
  eulaDescription.style.display = "none";
  eulaQuickGuideImage.style.display = "block";
  eulaGallerySection.style.display = "none";
  eulaMusicVideoSection.style.display = "none";
  eulaOverview.style.display = "none";
};

eulaGalleryButton.onclick = function () {
  eulaDescription.style.display = "none";
  eulaQuickGuideImage.style.display = "none";
  eulaGallerySection.style.display = "block";
  eulaMusicVideoSection.style.display = "none";
  eulaOverview.style.display = "none";
};

eulaMusicVideoButton.onclick = function () {
  eulaDescription.style.display = "none";
  eulaQuickGuideImage.style.display = "none";
  eulaGallerySection.style.display = "none";
  eulaMusicVideoSection.style.display = "block";
  eulaOverview.style.display = "none";
};

// Modal functionality for gallery images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = Array.from(
  document.querySelectorAll("#EulaGallery .gallery-grid img")
);

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
