document.addEventListener("DOMContentLoaded", () => {
  // Lazy loading images
  const lazyImages = document.querySelectorAll("img.lazy");

  const onIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Simulate a delay for the placeholder visibility
        setTimeout(() => {
          img.src = img.dataset.src;
          img.onload = () => img.classList.add("loaded");
          observer.unobserve(img);
        }, 200); // Adjust delay as needed
      }
    });
  };

  const observer = new IntersectionObserver(onIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  lazyImages.forEach((img) => observer.observe(img));

  // Set last modified date
  const lastModified = new Date(document.lastModified);
  document.getElementById("lastModified").textContent = lastModified.toLocaleString();
});
