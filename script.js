document.addEventListener("DOMContentLoaded", function () {
  // --- Dropdown Toggle ---
  const aboutDropdown = document.getElementById("aboutDropdown");
  const dropdown = aboutDropdown?.parentElement;

  if (aboutDropdown && dropdown) {
    aboutDropdown.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking elsewhere
    window.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }

  // --- Video Modal ---
  const watchBtn = document.getElementById("watchVideoBtn");
  const videoModal = document.getElementById("videoModal");
  const closeModal = document.getElementById("closeModal");

  if (watchBtn && videoModal && closeModal) {
    watchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      videoModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
      videoModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === videoModal) {
        videoModal.style.display = "none";
      }
    });
  }

  // --- Learn More Modal ---
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  const infoModal = document.getElementById("infoModal");
  const closeInfoModal = document.getElementById("closeInfoModal");

  if (learnMoreBtn && infoModal && closeInfoModal) {
    learnMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      infoModal.style.display = "block";
    });

    closeInfoModal.addEventListener("click", function () {
      infoModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === infoModal) {
        infoModal.style.display = "none";
      }
    });
  }
});
