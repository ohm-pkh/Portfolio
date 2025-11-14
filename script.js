const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

document.querySelectorAll("#Home, #Profile").forEach(el => observer.observe(el));


const container = document.querySelector('.infoContainer');
const dots = document.querySelectorAll('.dot');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = dot.getAttribute('data-index');
        container.scrollLeft = container.clientWidth * index;

        // Update active class
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});
