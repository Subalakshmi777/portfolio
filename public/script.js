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

  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const message = form.message.value.trim();

  // 🔴 VALIDATION
  if (!name || !email || !message) {
    msg.textContent = "❌ Please fill in all fields";
    msg.style.color = "red";
    return;
  }

  // Optional email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    msg.textContent = "❌ Please enter a valid email address";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Sending...";
  msg.style.color = "inherit";

  emailjs
    .send("service_ak5cqex", "template_4iss5ps", {
      user_name: name,
      user_email: email,
      message: message,
    })
    .then(() => {
      msg.textContent = "✅ Message sent successfully!";
      msg.style.color = "green";
      form.reset();
    })
    .catch((error) => {
      console.error("❌ EmailJS error:", error);
      msg.textContent = "❌ Failed to send message";
      msg.style.color = "red";
    });



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
