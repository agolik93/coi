document.addEventListener("DOMContentLoaded", () => {
  const mainSection = document.getElementById("mainSection");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainSection.style.opacity = 1;
        } else {
          mainSection.style.opacity = 0;
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(mainSection);
});

function toggleText() {
  const extraParagraph = document.querySelector(".main__description--extra");
  const button = document.querySelector(".main__button");

  if (!extraParagraph.classList.contains("main__description--visible")) {
    extraParagraph.textContent =
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.";
    extraParagraph.classList.add("main__description--visible");
    button.style.display = "none";
  }
}
