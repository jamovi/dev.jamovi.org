export function setupTOC() {
  const observerOptions = {
    rootMargin: '-100px 0% -80%',
    threshold: 1.0
  };

  const headingElements = Array.from(document.querySelectorAll('h2[id], h3[id]'));
  const tocLinks = Array.from(document.querySelectorAll('.toc-link'));

  if (headingElements.length === 0 || tocLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  headingElements.forEach((el) => observer.observe(el));
}
