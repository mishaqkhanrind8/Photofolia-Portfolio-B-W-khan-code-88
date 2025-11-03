
// Open full-size image
document.querySelectorAll(".btn-view").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const imgSrc = btn.getAttribute("data-img");
    const modal = document.getElementById("imageModal");
    const fullImg = document.getElementById("fullImage");
    fullImg.src = imgSrc;
    modal.style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("imageModal").style.display = "none";
});

// Close when clicking outside image
document.getElementById("imageModal").addEventListener("click", e => {
  if (e.target.id === "imageModal") {
    e.currentTarget.style.display = "none";
  }
});
