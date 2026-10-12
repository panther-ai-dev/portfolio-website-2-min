const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
menu.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open);
});
links.addEventListener("click", () => links.classList.remove("open"));

const form = document.querySelector(".form");
const status = form.querySelector(".status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, msg } = form.elements;
  if (!name.value.trim() || !msg.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
    status.textContent = "Please fill all fields with a valid email.";
    return;
  }
  status.textContent = `Thanks ${name.value.trim()}! I'll reply soon.`;
  form.reset();
});
