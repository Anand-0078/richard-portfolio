
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector(".header-section");
const upArrow = document.querySelector(".up-arrow");
const links = document.querySelectorAll(".header-section a");

closeIcon.addEventListener("click", function () {
  if (header.style.display === "flex") {
    header.style.display = "none";   // close
  } else {
    header.style.display = "flex";   // open
    header.style.flexDirection = "column";
    header.style.position = "absolute";
    header.style.width = "100%";
    header.style.height = "300px";
    header.style.fontFamily = "courier";
  }
});
button.addEventListener("click", function () {
  if (paragraph.style.display === "block") {
    paragraph.style.display = "none";
  } else {
    paragraph.style.display = "block";
  }
});


links.forEach(link => {
  link.addEventListener("click", function () {
    header.style.display = "flex"; // close menu after click
  });
});





window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { // show after scrolling 200px
    upArrow.classList.add("show");
  } else {
    upArrow.classList.remove("show");
  }
});

upArrow.addEventListener("click", () => {
  // Scroll smoothly to header
  header.scrollIntoView({ behavior: "smooth" });

  // Add animation
  upArrow.classList.add("clicked");

  // Remove animation after it finishes
  setTimeout(() => {
    upArrow.classList.remove("clicked");
  }, 300); // match CSS transition duration
});