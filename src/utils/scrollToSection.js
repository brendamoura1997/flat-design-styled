export const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const navbarHeight =
    document.querySelector("nav, [data-navbar]")?.offsetHeight || 70;
  const top =
    target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  window.scrollTo({ top, behavior: "smooth" });
};
