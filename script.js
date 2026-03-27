/* ============================================================
   MagnaRix — script.js
   ============================================================ */

(function () {
  "use strict";

  /* --- Mobile Nav Toggle --- */
  const toggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });

    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggle.classList.remove("open");
        navLinks.classList.remove("open");
      }
    });
  }

  /* --- Active Nav Highlighting --- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  if (currentPage === "" || currentPage === "/") currentPage = "index.html";

  document.querySelectorAll(".nav__links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "index.html" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* --- Expand / Collapse Sections --- */
  document.querySelectorAll(".expand-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var item = trigger.closest(".expand-item");
      var content = item.querySelector(".expand-content");
      var inner = content.querySelector(".expand-content__inner");

      if (item.classList.contains("open")) {
        content.style.maxHeight = "0";
        item.classList.remove("open");
      } else {
        content.style.maxHeight = inner.scrollHeight + "px";
        item.classList.add("open");
      }
    });
  });

  /* --- Contact Form (front-end only) --- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = "Message Received";
      btn.disabled = true;
      btn.style.opacity = "0.6";
      setTimeout(function () {
        btn.textContent = "Send Message";
        btn.disabled = false;
        btn.style.opacity = "1";
        contactForm.reset();
      }, 3000);
    });
  }
})();
