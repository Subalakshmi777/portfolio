
console.log("🔥 script.js loaded");

AOS.init({ once: true });

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.classList.toggle("fa-moon");
  toggle.classList.toggle("fa-sun");

/* ===============================
   EMAILJS CONTACT FORM
================================ */
document.addEventListener("DOMContentLoaded", function () {

  if (typeof emailjs !== "undefined") {
    emailjs.init("LsigqU-7PssVcFenI"); // ✅ your public key
    console.log("✅ EmailJS initialized");
  } else {
    console.error("❌ EmailJS not loaded");
    return;
  }

  const form = document.getElementById("contact-form");
  const formMsg = document.getElementById("formMsg");

  if (!form) {
    console.error("❌ Contact form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⛔ stop page reload

    formMsg.textContent = "Sending message...";

    emailjs
      .send("service_ak5cqex", "template_4iss5ps", {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value,
      })
      .then(() => {
        formMsg.textContent = "✅ Message sent successfully!";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        formMsg.textContent = "❌ Failed to send message. Try again.";
      });
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".contact-form button");
  if (btn) {
    btn.addEventListener("click", () => {
      console.log("✅ Send button clicked");
    });
  } else {
    console.log("❌ Button not found");
  }
});

});
