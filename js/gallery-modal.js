const galleryAppIcon = document.querySelector("#gallery");
const galleryModal = document.querySelector("#galleryApp");

galleryAppIcon.addEventListener("dblclick", () => {
  galleryModal.showModal();
})

const closeGalleryButton = document.querySelector("#closeGallery");

closeGalleryButton.addEventListener("click", () => {
  galleryModal.close();
})
