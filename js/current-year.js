const currentYear = (target) => {
  const date = new Date();
  target.textContent = String(date.getFullYear());
};

currentYear(document.querySelector(".current-year"));
