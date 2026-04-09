document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".stream-card[data-link]");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const target = card.getAttribute("data-link");
      if (target) {
        window.location.href = target;
      }
    });

    card.addEventListener("keypress", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const target = card.getAttribute("data-link");
        if (target) {
          window.location.href = target;
        }
      }
    });
  });

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("show"));
  }
});
