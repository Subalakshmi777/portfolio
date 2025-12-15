
console.log("🔥 script.js loaded");

AOS.init({ once: true });

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.classList.toggle("fa-moon");
  toggle.classList.toggle("fa-sun");

/* ==================================================
   📧 EMAILJS (SAFE – WILL NOT BREAK TOGGLE)
================================================== */
document.addEventListener("DOMContentLoaded", () => {

  // Initialize EmailJS safely
  if (typeof emailjs !== "undefined") {
    emailjs.init("VQ_WftGl4WBoSxZT5");
    console.log("✅ EmailJS loaded");
  } else {
    console.warn("⚠️ EmailJS NOT loaded");
    return;
  }

  const form = document.getElementById("contact-form"); // ✅ match your form ID
  const formMsg = document.getElementById("formMsg");   // ✅ message placeholder

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ✅ prevents page reload

    formMsg.innerText = "Sending...";

    emailjs
      .send("service_xoh4gld", "template_twhcryp", {
        name: form.user_name.value,
        email: form.user_email.value,
        message: form.message.value,
      })
      .then(() => {
        formMsg.innerText = "Message sent successfully 🎉";
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        formMsg.innerText = "Failed to send message 😢";
      });
  });
});

});
