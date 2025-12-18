// ===============================
// AOS
// ===============================
AOS.init({ once: true });

// ===============================
// THEME TOGGLE
// ===============================
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("fa-moon");
    toggle.classList.toggle("fa-sun");
  });
}

// ===============================
// EMAILJS CONTACT FORM
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 script.js loaded");

  if (!window.emailjs) {
    console.error("❌ EmailJS not loaded");
    return;
  }

  emailjs.init("VQ_WftGl4WBoSxZT5");
  console.log("✅ EmailJS initialized");

  const form = document.getElementById("contact-form");
  const msg = document.getElementById("formMsg");

  if (!form) {
    console.error("❌ contact-form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("📨 Form submit triggered");

    msg.textContent = "Sending...";

    emailjs
      .send("service_xoh4gld", "template_twhcryp", {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value,
      })
      .then(() => {
        msg.textContent = "✅ Message sent successfully!";
        form.reset();
      })
      .catch((error) => {
        console.error("❌ EmailJS error:", error);
        msg.textContent = "❌ Failed to send message";
      });
  });
});
