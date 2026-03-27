/* ============================================================
   MagnaRix — script.js
   ============================================================ */

(function () {
  "use strict";

  /* --- Mobile Nav --- */
  var toggle = document.querySelector(".nav__toggle");
  var navLinks = document.querySelector(".nav__links");

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

  /* --- Active Nav --- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  if (currentPage === "" || currentPage === "/") currentPage = "index.html";

  document.querySelectorAll(".nav__links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  /* --- Expand / Collapse --- */
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

  /* --- Subtle fade-in on scroll --- */
  var fadeEls = document.querySelectorAll(".section, .card, .contemplative-item, .arch-layer, .insight-card, .usecase-card, .principle");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

    fadeEls.forEach(function (el) {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  }

  /* --- Contact Form --- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = "Received";
      btn.disabled = true;
      btn.style.opacity = "0.5";
      setTimeout(function () {
        btn.textContent = "Send Message";
        btn.disabled = false;
        btn.style.opacity = "1";
        contactForm.reset();
      }, 3000);
    });
  }
})();

/* --- Fade-in CSS injected via JS to avoid FOUC on no-JS --- */
(function () {
  var style = document.createElement("style");
  style.textContent =
    ".fade-in { opacity: 0; transform: translateY(12px); transition: opacity 0.6s ease, transform 0.6s ease; }" +
    ".fade-in.visible { opacity: 1; transform: translateY(0); }";
  document.head.appendChild(style);
})();
