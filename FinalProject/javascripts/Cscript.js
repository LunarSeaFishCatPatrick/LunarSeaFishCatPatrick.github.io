const clorindeLoreButton = document.getElementById("CLore");
const clorindeQuickGuideButton = document.getElementById("CGuide");
const clorindeGalleryButton = document.getElementById("CGallery");
const clorindeMusicVideoButton = document.getElementById("CMusicVideo");
const clorindeDescription = document.getElementById("ClorindeDescription");
const clorindeQuickGuideImage = document.getElementById(
  "quickGuideImageClorinde"
);
const clorindeGallerySection = document.getElementById("ClorindeGallery");
const clorindeMusicVideoSection = document.getElementById(
  "ClorindeMusicVideoSection"
);
const clorindeoverview = document.getElementById("clorindeover");

clorindeLoreButton.onclick = function () {
  clorindeoverview.style.display = "none";
  clorindeDescription.style.display = "block";
  clorindeQuickGuideImage.style.display = "none";
  clorindeGallerySection.style.display = "none";
  clorindeMusicVideoSection.style.display = "none";
};

clorindeQuickGuideButton.onclick = function () {
  clorindeoverview.style.display = "none";
  clorindeDescription.style.display = "none";
  clorindeQuickGuideImage.style.display = "block";
  clorindeGallerySection.style.display = "none";
  clorindeMusicVideoSection.style.display = "none";
};

clorindeGalleryButton.onclick = function () {
  clorindeDescription.style.display = "none";
  clorindeQuickGuideImage.style.display = "none";
  clorindeGallerySection.style.display = "block";
  clorindeMusicVideoSection.style.display = "none";
};

clorindeMusicVideoButton.onclick = function () {
  clorindeDescription.style.display = "none";
  clorindeQuickGuideImage.style.display = "none";
  clorindeGallerySection.style.display = "none";
  clorindeMusicVideoSection.style.display = "block";
};
