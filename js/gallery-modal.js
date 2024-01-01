const galleryAppIcon = document.querySelector("#gallery");
const galleryModal = document.querySelector("#galleryApp");

//open from desktop
galleryAppIcon.addEventListener("dblclick", () => {
  galleryModal.showModal();
})

const closeGalleryButton = document.querySelector("#closeGallery");

closeGalleryButton.addEventListener("click", () => {
  galleryModal.close();
})

//open from menu
document.querySelector("#galleryMenuItem").addEventListener("click", () => {
  document.querySelector("#menu").style.display = "none";
  galleryModal.showModal();
})