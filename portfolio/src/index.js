//  code for custom cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

// code for background gradient blur animation
function fadeInShapes() {
  const shapes = document.querySelectorAll(".animated-shape");
  shapes.forEach((shape, index) => {
    setTimeout(() => {
      shape.style.opacity = "0.3"; // Set the desired opacity
    }, index * 1000); // Delay each shape to create a staggered effect
  });
}

// Trigger the fade-in effect when the page fully loads - doesnt work i think
window.addEventListener("load", () => {
  fadeInShapes();
});
