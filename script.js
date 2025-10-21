// WhatsApp number
const phoneNumber = "916363407163";

// Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbwMoM6Z17m6K0u3Yd0bR-mncK246ILmuyIcCxWl40m2uhu_S2WtcW3Y_UgNN_gJDG0jkw/exec";

document.addEventListener("DOMContentLoaded", () => {
  // Buy button click handler
  document.querySelectorAll(".buy-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const product = btn.closest(".product");
      const name = product.querySelector("h3").textContent.trim();
      const priceText = product.querySelector("span").textContent.trim();

      const priceMatch = priceText.match(/₹\s?(\d+)/);
      const price = priceMatch ? parseFloat(priceMatch[1]) : 0;

      const tax = parseFloat((price * 0.05).toFixed(2)); // 5% tax
      const quantity = 1;
      const customerNumber = phoneNumber;

      // 1. Send order data to Google Sheet
      fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          customerNumber,
          product: name,
          quantity,
          price,
          tax
        })
      })
      .then(response => response.json())
      .then(result => console.log("Order logged:", result))
      .catch(error => console.error("Error sending to Google Sheet:", error));

      // 2. Open WhatsApp
      const msg = `Hi, I'd like to order ${name} – ${priceText}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

      const newTab = window.open(url, "_blank");
      if (!newTab) {
        window.location.href = url;
      }
    });
  });

  // Smooth scroll and About section toggle
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetID = link.getAttribute("href");
      const target = document.querySelector(targetID);

      if (targetID === "#about") {
        // Show About section only when clicked
        target.classList.remove("hidden");
      }

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu
      document.getElementById("nav-menu").classList.remove("show");
    });
  });

  // Mobile nav toggle
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  window.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
      navMenu.classList.remove("show");
    }
  });
});
