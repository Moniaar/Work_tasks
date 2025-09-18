// JS Animation (typing effect)
const text = "Welcome!";
const hero = document.getElementById("heroText");
let i = 0;
function typing() {
  if (i < text.length) {
    hero.textContent += text.charAt(i);
    hero.style.opacity = 1;
    i++;
    setTimeout(typing, 150);
  }
}
window.onload = typing;

// JS Animation on boxes
document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", () => {
    box.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }],
      { duration: 500 }
    );
  });
});

const boxes = document.querySelectorAll(".hidden-box");
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // إذا العنصر دخل في الشاشة
      entry.target.classList.add("show-box");
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});
boxes.forEach(box => observer.observe(box));
