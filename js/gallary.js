const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxPlay = document.getElementById("lightboxPlay");
/*=================== Array of Cards ==============================*/

/*=================== Projects ==============================*/
const projects = [
  // LED
  {
    category: "led",
    title: "  بروفايل ليد",

    images: [
      {
        //1
        image: "img/3abae156bfd14c8325ae6eb1daadf0e5.jpg",
        alt: "إضاءة بروفايل ليد في غرفة معيشة",
        title: "تنفيذ بروفايل ليد على الأسقف",
      },

      {
        //2
        image: "img/99199348999a768b147f7412500a4eb3.jpg",
        alt: "إضاءة بروفايل ليد في غرفة طعام",
        title: "تنفيذ إضاءة خطية بروفايل ليد للحوائط",
      },

      {
        //3
        image: "img/photo_2026-09-03_00-24-31.jpg",
        alt: "بروفايل ليد داخل السقف",
        title: "تركيب بروفايل ليد مخفي داخل السقف",
      },

      {
        //4
        image: "img/photo_2026-09-03_00-24-27 (2).jpg",
        alt: "بروفايل ليد للحائط",
        title: "تنفيذ إضاءة بروفايل ليد في غرف النوم",
      },

      {
        //5
        image: "img/photo_2026-09-03_00-24-29 (2).jpg",
        alt: "إضاءة خطية على الحائط",
        title: "تنفيذ خطوط إضاءة ديكورية للمكاتب",
      },

      {
        //6
        image: "img/photo_2026-09-03_00-24-30.jpg",
        alt: "إضاءة بروفايل في السقف",
        title: "تنفيذ إضاءة خطية للطرقة",
      },

      {
        //7
        image: "img/photo_2026-09-03_00-24-22.jpg",
        alt: "إضاءة بروفايل ليد حديثة",
        title: "تركيب بروفايل ليد بتصميم هندسي",
      },

      {
        //8
        image: "img/06e32d53994b6d14a90398e1d7966bc4.jpg",
        alt: "إضاءة بروفايل مزدوجة",
        title: "تنفيذ إضاءة بروفايل مزدوجة للحائط",
      },

      {
        //9
        image: "img/b1005db3ca181f5ef3a2c1b0bc978600.jpg",
        alt: "إضاءة بروفايل ليد مودرن",
        title: "تنفيذ إضاءة مودرن ببروفايل ليد",
      },

      {
        //10
        image: "img/0b69263d02ffb9653a55786c1b164953.jpg",
        alt: "بروفايل ليد للديكور",
        title: "تنفيذ خطوط إضاءة ديكورية",
      },

      {
        //11
        image: "img/7be68f92daff98825d05a56f04c5c394.jpg",
        alt: "إضاءة سقف ببروفايل ليد",
        title: "تنفيذ بروفايل ليد داخل  الحائط",
      },

      {
        //12
        image: "img/photo_2026-09-03_00-24-20.jpg",
        alt: "إضاءة حائط ببروفايل ليد",
        title: "تركيب إضاءة حائطية ببروفايل ليد",
      },

      {
        //13
        image: "img/9ef07c84f6bb2b7c9b55ccb89428bdf7.jpg",
        alt: "إضاءة بروفايل ليد داخلية",
        title: "تنفيذ إضاءة  خطية الوان",
      },

      {
        //14
        image: "img/9a1bcc6a4699c276bc4ef7729c655410.jpg",
        alt: "إضاءة بروفايل ليد في المنزل",
        title: "تنفيذ إضاءة بروفايل ليد الوان",
      },

      {
        //15
        image: "img/d4543e8b2a6c3a661ebfe582bf32d093.jpg",
        alt: "تصميم بروفايل ليد حديث",
        title: "تنفيذ تصميم إضاءة بروفايل ليد حديث",
      },
    ],
  },

  /**************************************************** */
  // Panels
  {
    category: "Panels",
    title: "لوحات كهربائية",

    images: [
      {
        //1
        image: "img/08cec1ed57446b5259bdfc342065dcc7.jpg",
        alt: "تركيب لوحة كهربائية",
        title: "تنفيذ وتركيب لوحة كهربائية",
      },

      {
        //2
        image: " img/89cd3d3089d84bcac120adcd6f94a494.jpg",
        alt: "لوحة توزيع كهربائية",
        title: "تركيب لوحة توزيع كهربائية",
      },

      {
        //3
        image: "img/e1f71c07b0dd2c5039f2d29b7ed4d03b.jpg ",
        alt: "توصيل لوحة كهربائية",
        title: "توصيل وتنظيم القواطع الكهربائية",
      },

      {
        //4
        image: "img/a166d83cf186621ddff1b071234f24e2.jpg  ",
        alt: "صيانة لوحة كهربائية",
        title: "فحص وصيانة اللوحة الكهربائية",
      },

      {
        //5
        image: "img/af7745075d7e4c83d704bc37f174df6c.jpg ",
        alt: "فحص لوحة كهربائية",
        title: "فحص وتنظيم التوصيلات",
      },

      {
        //6
        image: "img/9d86214afaf369ed4f198e37d646e643.jpg",
        alt: "كهربائي يعمل على لوحة كهربائية",
        title: "تركيب وتجهيز لوحة كهربائية",
      },

      {
        //7
        image: "img/2c06afe7693d2dae51e121fc055cea20.jpg",
        alt: "لوحة قواطع كهربائية",
        title: "تركيب قواطع الحماية",
      },

      {
        //8
        image: "img/36084a600f03dce3780ec1a111d587ae.jpg",
        alt: "أعمال كهربائية داخل لوحة",
        title: "تنظيم دوائر الكهرباء",
      },

      {
        //9
        image: "img/ef6e252439fcb6ac8f5bfcc6f4d81110.jpg",
        alt: "فني كهرباء",
        title: "تجهيز التوصيلات الكهربائية",
      },

      {
        //10
        image: "img/26a8a0cb7e11d1ccf37801ced0f6b6e8.jpg",
        alt: "لوحة كهرباء وتحكم",
        title: "تنفيذ لوحة تحكم كهربائية",
      },

      {
        //11
        image: "img/4b636b7e22bb597d543ddde93f978136.jpg",
        alt: "لوحة كهرباء وتحكم",
        title: "تنفيذ لوحة تحكم كهربائية",
      },

      {
        //12
        image: "img/493cd2af5c8a1838f89faeae5e8c51b5.jpg",
        alt: "لوحة كهرباء وتحكم",
        title: "تنفيذ لوحة تحكم كهربائية",
      },
    ],
  },

  /************************************************ */
  // Wiring
  {
    category: "wiring",
    title: "تمديدات كهربائية",

    images: [
      {
        //1
        image: "img/68b187fa042bb735a8aacb8674606205.jpg",

        alt: "تمديدات كهربائية",
        title: "تنفيذ التمديدات الكهربائية",
      },

      {
        //2
        image: "img/11d9b2b4164a67a727603892c5a5ff26.jpg",
        alt: "سحب الأسلاك داخل الفلكسبل",
        title: "سحب الأسلاك داخل الفلكسبل",
      },

      {
        //3
        image: "img/924c624b4f91f166392cc31a0f7e42e5.jpg",
        alt: "سحب الأسلاك داخل المواسير",
        title: "سحب الأسلاك داخل المواسير",
      },

      {
        //4
        image: "img/738ae44f5f09d54d895dc9d8bb9882aa.jpg",
        alt: "تركيب التمديدات الكهربائية",
        title: "تركيب التمديدات الكهربائية",
      },

      {
        //5
        image: "img/6d854719658bd35413cf5ee3bfa57e81.jpg",
        alt: "تأسيس كهرباء المنزل",
        title: "تأسيس كهرباء المنزل",
      },

      {
        //6
        image: "img/4153032d6d2eeb8dcf01232d89ea665a.jpg",
        alt: "تنظيم الأسلاك الكهربائية",
        title: "تنظيم وتجهيز الأسلاك",
      },

      {
        //7
        image: "img/d31ce180442141b3a45b5808b03b3476.jpg",
        alt: "تركيب المواسير الكهربائية",
        title: "تركيب مواسير الكهرباء",
      },

      {
        //8
        image: "img/a5e45a929dc9d2d5b58a9169e6a7f568.jpg",
        alt: "تنفيذ أعمال الكهرباء",
        title: "تنفيذ أعمال الكهرباء بالموقع",
      },

      {
        //9
        image: "img/c068d6f1c315cc46d074d05be837bcf4.jpg",
        alt: "توصيل الأسلاك الكهربائية",
        title: "توصيل وتجميع الأسلاك",
      },

      {
        //10
        image: "img/969b0137dfe2e3ed984ea92d2314ab86.jpg",
        alt: "تركيب الفلكسبل الكهربائي",
        title: "تركيب الفلكسبل الكهربائي",
      },

      {
        //11
        image: "img/ed17286aa67602eb872c57c7c41d7858.jpg",
        alt: "تمديدات كهربائية للمباني",
        title: "تمديدات كهربائية للمباني",
      },

      {
        //12
        image: "img/bdb32a6c22cc53055b1af8326d291bad.jpg",
        alt: "سحب الأسلاك داخل الفلكسبل",
        title: "سحب وترتيب الأسلاك",
      },
    ],
  },

  /************************************************ */
  // Neon
  {
    category: "Neon",
    title: "يفط مضيئة نيون",

    images: [
      {
        //1
        image: "img/34d1af9d38460cfc8c642e211399667c.jpg",
        alt: "يفطة نيون مضيئة",
        title: "تركيب يفطة نيون مضيئة",
      },

      {
        //2
        image: "img/08507356aa65356d79193deaa65a12c9.jpg",
        alt: "يفطة نيون للمحلات",
        title: "تركيب يفطة نيون للمحلات",
      },

      {
        //3
        image: "img/52b1150b4ad894a1f976e8e1d55e1693.jpg",
        alt: "يفطة LED مضيئة",
        title: "تركيب يفطة LED مضيئة",
      },

      {
        //4
        image: "img/292537acb4fc6889f182153a2d5404e5.jpg",
        alt: "يفطة مضيئة",
        title: "تنفيذ وتركيب يفطة مضيئة",
      },

      {
        //5
        image: "img/4915a237707c50c91083c60f36f7b465.jpg",
        alt: "يفطة نيون",
        title: "تنفيذ يفطة نيون ديكورية",
      },

      {
        //6
        image: "img/4253accd81851251b0a17108dd551ed2.jpg",
        alt: "يفط مضيئة للمحلات",
        title: "تركيب يفط مضيئة للمحلات",
      },

      {
        //7
        image: "img/1249c563974e916d215618dcc61f5f4d.jpg ",
        alt: "إضاءة واجهة محل",
        title: "تركيب إضاءة واجهة محل",
      },

      {
        //8
        image: " img/83fa04b191c4928fc1bbd5fe60bb3dfd.jpg",
        alt: "يفطة LED للمحل",
        title: "تركيب يفطة LED للمحل",
      },

      {
        //9
        image: "img/221d4dab58807debcd9784d4bad32bb6.jpg",
        alt: "يفطة نيون ديكورية",
        title: "تركيب نيون ديكوري",
      },

      {
        //10
        image: "img/7fca93e82fda9918d122e5e55d6286da.jpg",
        alt: "يفطة مضيئة خارجية",
        title: "تركيب يفطة مضيئة خارجية",
      },

      {
        //11
        image: "img/5b421280846e8e4c2b3ff6241bd505a4.jpg",
        alt: "يفطة نيون للمطاعم",
        title: "تركيب يفطة نيون للمطاعم",
      },

      {
        //12
        image: "img/3b0f2215ec0484e1420d60db2a5165f5.jpg",
        alt: "يفطة LED مضيئة",
        title: "تنفيذ يفطة LED مضيئة",
      },

      {
        //13
        image: "img/3e445fc48b1565ea617b10d03ad53407.jpg",
        alt: "إضاءة لافتة تجارية",
        title: "تركيب إضاءة لافتة تجارية",
      },

      {
        //14
        image: "img/2d18521919734545f290922e1774930d.jpg",
        alt: "يفطة نيون مخصصة",
        title: "تركيب يفطة نيون مخصصة",
      },

      {
        //15
        image: "img/2d01664f845ea53077c6960d2ca9da88.jpg",
        alt: "يفطة مضيئة للمحل",
        title: "تنفيذ وتركيب لافتة مضيئة",
      },

      {
        //16
        image: "img/1aa0618b66ff429f7caacacea2dbfab2.jpg",
        alt: "نيون فليكس",
        title: "تركيب Neon Flex",
      },

      {
        //17
        image: "img/3d02fa9081d386186eacc1d74d4474d7.jpg",
        alt: "إضاءة واجهة تجارية",
        title: "تنفيذ إضاءة واجهة تجارية",
      },

      {
        //18
        image: "img/57eb93dfee842e7129c2dc4fb781c3ff.jpg",
        alt: "يفطة مضيئة ثلاثية الأبعاد",
        title: "تركيب يفطة 3D مضيئة",
      },

      {
        //19
        image: "img/591c1ad2a9f480458c322eb5b8ab162a.jpg",
        alt: "يفطة نيون خارجية",
        title: "تركيب يفطة نيون خارجية",
      },

      {
        //20
        image: "img/4255db46b2d4cf53feb0b5c45ca7ffd1.jpg",
        alt: "يفط مضيئة",
        title: "تنفيذ وتركيب يفط مضيئة",
      },

      {
        //21
        image: "img/eb04436c510531c4920a057622dbd09d.jpg",
        alt: "يفط مضيئة",
        title: "تنفيذ وتركيب يفط مضيئة",
      },
    ],
  },

  /********************************************* */
  //gypsum-lighting
  {
    category: "gypsum-lighting",
    title: "إضاءة الجبس بورد",

    images: [
      {
        image: "img/photo_2026-09-03_00-24-33.jpg",
        alt: "سبوتات داخل الجبس بورد",
        title: "تركيب سبوتات داخل الجبس بورد",
      },

      {
        image: "img/photo_2026-09-03_00-24-26.jpg",
        alt: "إضاءة LED داخل الجبس",
        title: "تنفيذ إضاءة LED داخل الجبس",
      },

      {
        image: "img/photo_2026-09-03_00-24-24.jpg",
        alt: "إضاءة مخفية بالجبس بورد",
        title: "تنفيذ إضاءة مخفية بالجبس بورد",
      },

      {
        image: "img/photo_2026-09-03_00-24-23.jpg",
        alt: "سبوتات سقف جبس بورد",
        title: "تركيب سبوتات سقف جبس بورد",
      },

      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        alt: "إضاءة ديكورية بالجبس",
        title: "تنفيذ إضاءة ديكورية بالجبس",
      },

      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        alt: "إضاءة سقف جبس بورد",
        title: "تنفيذ إضاءة سقف جبس بورد",
      },

      {
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        alt: "إضاءة LED مخفية",
        title: "تركيب إضاءة LED مخفية",
      },

      {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        alt: "سبوتات وإضاءة LED",
        title: "تنسيق السبوتات وإضاءة LED",
      },

      {
        image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90",
        alt: "إضاءة ديكورية",
        title: "تنفيذ إضاءة ديكورية حديثة",
      },

      {
        image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e",
        alt: "إضاءة مخفية في السقف",
        title: "تركيب إضاءة مخفية في السقف",
      },

      {
        image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
        alt: "سبوتات LED في الجبس",
        title: "تركيب سبوتات LED في الجبس",
      },

      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        alt: "إضاءة جبس بورد",
        title: "تنفيذ إضاءة جبس بورد ديكورية",
      },

      {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        alt: "LED Profile داخل الجبس",
        title: "تركيب LED Profile داخل الجبس",
      },

      {
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87",
        alt: "إضاءة جبس بورد حديثة",
        title: "تركيب إضاءة حديثة بالجبس بورد",
      },

      {
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
        alt: "سبوتات وإضاءة مخفية",
        title: "تنفيذ سبوتات وإضاءة مخفية",
      },
    ],
  },

  // Maintenance
  {
    category: "maintenance",
    title: "صيانة أعطال",

    images: [
      {
        image: "img/maintenance1.jpg",
        alt: "صيانة كهربائية",
        title: "صيانة الأعطال الكهربائية",
      },

      {
        image: "img/maintenance2.jpg",
        alt: "صيانة كهربائية",
        title: "إصلاح الأعطال الكهربائية",
      },
    ],
  },
];

/*=================== Create Cards ==============================*/

function displayProjects(projects) {
  galleryGrid.innerHTML = "";

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

    card.addEventListener("click", () => {
      openLightbox(index);
    });
  });
}

/*=================== Selected Category ==============================*/
//هروح اجيب الكاتجوري من اللوكال استورتج والله لو كان بيساوي All
//هبدا اضيف الصور بالتايتل بتاعها  جوا الاراي الي اسمها جالري
//طب لو اي حاجه تاني هبدا اقارن الكاتجوري الي جبتو من اللوكال استورتج
//ب الي عندي عن طريق فايند لو زي بعض هظهرلك الصور بتاعت الكاتجوري
const selectedCategory = localStorage.getItem("galleryCategory");

let galleryProjects = [];

/****************** Display All Images ***************************/

if (selectedCategory === "all") {
  projects.forEach((project) => {
    project.images.forEach((image) => {
      galleryProjects.push({
        ...image,
        category: project.title,
      });
    });
  });

  displayProjects(galleryProjects);


} else {
  const selectedProject = projects.find((project) => {
    return project.category === selectedCategory;
  });

  if (selectedProject) {
    //عشان يجيب التايتل بتاع الصوره الي في الكاتجوري
    selectedProject.images.forEach((image) => {
      galleryProjects.push({
        ...image,
        category: selectedProject.title,
      });
    });
  }

  displayProjects(galleryProjects);
}
/*=================== Slider ==============================*/

// رقم الصورة الحالية
let currentIndex = 0;

// السلايدر
let slider;

// حالة السلايدر
let isPlaying = false;

function showImage() {
  const project = galleryProjects[currentIndex];
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

  if (currentIndex >= galleryProjects.length) {
    currentIndex = 0;
  }

  showImage();
}

/*=================== Previous ==============================*/

function showPrev() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = galleryProjects.length - 1;
  }

  showImage();
}

/*=================== Events ==============================*/

// إغلاق
lightboxClose.addEventListener("click", closeLightbox);

//معكوسين قصد عشان اتجاه الصفحه RTL
// التالي
lightboxPrev.addEventListener("click", showNext);

// السابق
lightboxNext.addEventListener("click", showPrev);

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
