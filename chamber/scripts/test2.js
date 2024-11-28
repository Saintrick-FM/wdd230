document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item");
  
    accordionItems.forEach(item => {
      const header = item.querySelector("h3");
      header.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });