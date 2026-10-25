const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const top = element.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* CONTACT FORM TO WHATSAPP */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const text =
`Hello Believers Digital,

My name is ${name}.
Phone: ${phone}
Service: ${service}

${message}`;

    const whatsappURL =
      `https://wa.me/2349150859801?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  });
}

/* COPYRIGHT YEAR */

document.querySelectorAll(".year").forEach(el => {
  el.textContent = new Date().getFullYear();
});