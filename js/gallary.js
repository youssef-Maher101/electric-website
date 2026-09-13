const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxPlay = document.getElementById("lightboxPlay");
/*=================== Array of Cards ==============================*/

const projects = [
  {
    image: "img/3abae156bfd14c8325ae6eb1daadf0e5.jpg",
    alt: "إضاءة بروفايل ليد في غرفة معيشة",
    category: "بروفايل ليد",
    title: "تنفيذ بروفايل ليد على الأسقف",
  },

  {
    image: "img/d4543e8b2a6c3a661ebfe582bf32d093.jpg",
    alt: "إضاءة بروفايل ليد في غرفة طعام",
    category: "بروفايل ليد",
    title: "تنفيذ إضاءة خطية بروفايل ليد للحوائط",
  },

  {
    image: "img/photo_2026-09-03_00-24-31.jpg",
    alt: "بروفايل ليد داخل السقف",
    category: "بروفايل ليد",
    title: "تركيب بروفايل ليد مخفي داخل السقف",
  },

  {
    image: "img/photo_2026-09-03_00-24-27 (2).jpg",
    alt: "بروفايل ليد للحائط",
    category: "بروفايل ليد",
    title: "تنفيذ إضاءة بروفايل ليد في غرف النوم",
  },

  {
    image: "img/photo_2026-09-03_00-24-29 (2).jpg",
    alt: "إضاءة خطية على الحائط",
    category: "بروفايل ليد",
    title: "تنفيذ خطوط إضاءة ديكورية للمكاتب",
  },

  {
    image: "img/photo_2026-09-03_00-24-30.jpg",
    alt: "إضاءة بروفايل في السقف",
    category: "بروفايل ليد",
    title: "تنفيذ إضاءة خطية للطرقة",
  },

  {
    image: "img/photo_2026-09-03_00-24-22.jpg",
    alt: "إضاءة بروفايل ليد حديثة",
    category: "بروفايل ليد",
    title: "تركيب بروفايل ليد بتصميم هندسي",
  },

  {
    image: "img/06e32d53994b6d14a90398e1d7966bc4.jpg",
    alt: "إضاءة بروفايل مزدوجة",
    category: "بروفايل ليد",
    title: "تنفيذ إضاءة بروفايل مزدوجة للحائط",
  },

  {
    image: "img/b1005db3ca181f5ef3a2c1b0bc978600.jpg",
    alt: "إضاءة بروفايل ليد مودرن",
    category: "LED Profile",
    title: "تنفيذ إضاءة مودرن ببروفايل ليد",
  },

  {
    image:
      "https://arlight.ru/_ipx/f_webp%2Cs_586x586/upload/products/7FFE56C7DCFB6B4F9E43336C300FBB9F.jpg",
    alt: "بروفايل ليد للديكور",
    category: "LED Profile",
    title: "تنفيذ خطوط إضاءة ديكورية",
  },

  {
    image:
      "https://a.allegroimg.com/original/11b423/f676dd98427983e283a528a163d1/Hlinikovy-LED-profil-pro-sadrokartonove-desky-zapusteny-siroky-2-m-Hmotnost-produktu-z-jednostkowym-balenim-0-6-kg",
    alt: "إضاءة سقف ببروفايل ليد",
    category: "LED Profile",
    title: "تنفيذ بروفايل ليد داخل الجبس بورد",
  },

  {
    image:
      "https://cdn.ledprofielkoning.nl/uploads/tx_multishop/images/products/normal/led/led-profiel-up-down-muur-profiel-1-meter-9.png",
    alt: "إضاءة حائط ببروفايل ليد",
    category: "LED Profile",
    title: "تركيب إضاءة حائطية ببروفايل ليد",
  },

  {
    image:
      "https://ledia.ro/cdn/shop/products/profil-led-gote-montaj-aplicat-pe-perete-aluminiu-438-x-18-mm-2-mprofile-de-peretelediaro-386284_700x700.jpg?v=1738510991",
    alt: "إضاءة بروفايل ليد داخلية",
    category: "LED Profile",
    title: "تنفيذ إضاءة داخلية خطية",
  },

  {
    image:
      "https://arlight.ru/_ipx/f_webp%2Cs_586x586/upload/products/7FFE56C7DCFB6B4F9E43336C300FBB9F.jpg",
    alt: "إضاءة بروفايل ليد في المنزل",
    category: "LED Profile",
    title: "تنفيذ إضاءة بروفايل ليد للمنزل",
  },

  {
    image:
      "https://a.allegroimg.com/original/11b423/f676dd98427983e283a528a163d1/Hlinikovy-LED-profil-pro-sadrokartonove-desky-zapusteny-siroki-2-m",
    alt: "تصميم بروفايل ليد حديث",
    category: "LED Profile",
    title: "تنفيذ تصميم إضاءة بروفايل ليد حديث",
  },
];

/*=================== Slider ==============================*/

// رقم الصورة الحالية
let currentIndex = 0;

// السلايدر
let slider;

// حالة السلايدر
let isPlaying = false;

function showImage() {
  const project = projects[currentIndex];

  lightboxImg.style.opacity = "0";

  setTimeout(() => {
    lightboxImg.src = project.image;
    lightboxImg.alt = project.alt;
    lightboxImg.style.opacity = "1";
  }, 200);
}

/*=================== Open Lightbox ==============================*/

function openLightbox(index) {
  currentIndex = index;

  showImage();

  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";
}

/*=================== Close Lightbox ==============================*/

function closeLightbox() {
  lightbox.classList.remove("active");

  document.body.style.overflow = "";

  clearInterval(slider);

  isPlaying = false;

  lightboxPlay.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

/*=================== Next ==============================*/

function showNext() {
  currentIndex++;

  if (currentIndex >= projects.length) {
    currentIndex = 0;
  }

  showImage();
}

/*=================== Previous ==============================*/

function showPrev() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = projects.length - 1;
  }

  showImage();
}

/*=================== Create Cards ==============================*/

projects.forEach((project, index) => {
  const card = document.createElement("div");

  card.classList.add("work-card");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.alt}">

    <div class="work-overlay">
      <div>
        <span>${project.category}</span>
        <h3>${project.title}</h3>
      </div>
    </div>
  `;

  galleryGrid.appendChild(card);

  // فتح الصورة
  card.addEventListener("click", () => {
    openLightbox(index);
  });
});

/*=================== Events ==============================*/

// إغلاق
lightboxClose.addEventListener("click", closeLightbox);

// التالي
lightboxNext.addEventListener("click", showNext);

// السابق
lightboxPrev.addEventListener("click", showPrev);

// تشغيل / إيقاف
lightboxPlay.addEventListener("click", () => {
  if (isPlaying) {

    clearInterval(slider);

    lightboxPlay.innerHTML = `<i class="fa-solid fa-play"></i>`;

    isPlaying = false;
  } else {
    slider = setInterval(showNext, 2500);

    lightboxPlay.innerHTML = `<i class="fa-solid fa-pause"></i>`;

    isPlaying = true;
  }
});
