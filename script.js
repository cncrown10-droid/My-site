<script>
let images = [
  "IMG_20251023_222244_991.jpg",
  "1758746190604.jpg",
  // Ajoute ici tes autres images si nécessaire
];
 
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox-img').src = images[currentIndex];
  document.getElementById('lightbox').style.display = "flex";
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

/* Fermer en cliquant en dehors de l'image */
document.getElementById('lightbox').addEventListener("click", function(e){
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});
</script>
