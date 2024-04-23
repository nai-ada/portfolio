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

function fadeInShapes() {
  const shapes = document.querySelectorAll(".animated-shape");
  shapes.forEach((shape, index) => {
    setTimeout(() => {
      shape.style.opacity = "0.2"; // Set the desired opacity
    }, index * 1000); // Delay each shape to create a staggered effect
  });
}

// Trigger the fade-in effect when the page fully loads
window.addEventListener("load", () => {
  fadeInShapes();
});

// scrolling animations
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0.5,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "fadeIn",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
