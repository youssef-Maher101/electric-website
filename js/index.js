/*================== Navigation ====================*/

let navLinks = Array.from(document.querySelectorAll("nav a"));
let footerLinks = Array.from(document.querySelectorAll("footer a"));
let navMain = document.querySelector(".nav-main");
let secondaryBtn = document.getElementById("secondaryBtn");
let navBtn = document.querySelector(".nav-btn");

// عنصر الـ <nav> نفسه  ده اللي بيتفتح ويتقفل في الموبايل
let navMenu = document.getElementById("navMenu");
let navToggle = document.getElementById("navToggle");

// Spread ==>هنفرد بيها اللينكات
let allLinks = [...navLinks, ...footerLinks];

// عند الضغط على أي لينك
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // شيل Active من كل اللينكات
    allLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // هات الـ href بتاع اللينك اللي اتضغط عليه
    let target = link.getAttribute("href");

    // دور على أي لينك عنده نفس الـ href
    allLinks.forEach((item) => {
      if (item.getAttribute("href") === target) {
        // خلي اللينك Active
        item.classList.add("active");
      }
    });

    // اقفل قائمة الموبايل لو مفتوحة
    closeMobileNav();
  });
});

// Toggle

function openMobileNav() {
  navMenu.classList.add("active");
  navToggle.classList.add("active");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("nav-open");
}

function closeMobileNav() {
  navMenu.classList.remove("active");
  navToggle.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.contains("active");
  isOpen ? closeMobileNav() : openMobileNav();
});

/* ================== HERO section ================== */

// خلي الـ nav الرئيسي Active في بداية الصفحة
navMain.classList.add("active");

// لو دوست على زرار شاهد أعمالنا
secondaryBtn.addEventListener("click", () => {
  // شيل Active من كل اللينكات
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // دور على اللينك اللي بيروح لقسم أعمالنا
  allLinks.forEach((link) => {
    if (link.getAttribute("href") === "#works") {
      // خلي أعمالنا Active
      link.classList.add("active");
    }
  });
});

// لو دوست على زرار احجز معاينة
navBtn.addEventListener("click", () => {
  // شيل Active من كل اللينكات
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // دور على اللينك اللي بيروح لقسم تواصل معنا
  allLinks.forEach((link) => {
    if (link.getAttribute("href") === "#contact") {
      // خلي تواصل معنا Active
      link.classList.add("active");
    }
  });
});

/***********************************************/

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const phone = contactForm.querySelector('input[type="tel"]').value;
  const service = contactForm.querySelector("select").value;
  const details = contactForm.querySelector("textarea").value;

  const message = `
مرحبًا محسن الونش 

أرغب في طلب خدمة كهرباء

 الاسم: ${name}
 رقم الهاتف: ${phone}
 الخدمة المطلوبة: ${service}

 تفاصيل الطلب:
${details}
`;

  const whatsappNumber = "201206591193";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});

