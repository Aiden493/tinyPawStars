document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
    button.classList.add("glow");
});

button.addEventListener("mouseleave", () => {
        setTimeout(() => {
            button.classList.remove("glow");
            }, 1000); // Glows for 1 second after leaving
        });
    });
});


   const items = document.querySelectorAll('.scroll-container > *');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5
  });

  items.forEach(item => observer.observe(item));



const hoverElements = document.querySelectorAll('.hover-effect');
hoverElements.forEach(Element => {
    Element.addEventListener('mouseenter' , () => {
        Element.classList.add('hovered');
    });
    Element.addEventListener('mouseleave' , () => {
        Element.classList.remove('hovered');
    });
});

