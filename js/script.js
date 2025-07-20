const toggle = document.getElementById("burger");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

toggle.addEventListener("click", () => {
  navLeft.classList.toggle("active");
  navRight.classList.toggle("active");
});

// PROPERTY SECTION JS 
const propertySwiper = new Swiper(".propertySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800, 
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});

// TESTIMONIAL
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      }
    }
  });
});


// TRUSTED SWIPER AUTO SCROLL 
document.addEventListener("DOMContentLoaded", function () {
  const trustedSwiper = new Swiper('.trusted-swiper', {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 3000,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      }
      ,
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 45,
      },
    }
  });
});
// FILTER RANGE AT TOP 
 document.addEventListener("DOMContentLoaded", function () {
    const rentSelect = document.querySelector(".rent-select select");
    const currencySelect = document.querySelector(".USD-select select");
    const locationInput = document.querySelector(".location-input input");
    const houseSelect = document.querySelector(".house-select select");
    const roomsSelect = document.querySelector(".rooms-select select");
    const searchBtn = document.querySelector(".search");

    searchBtn.addEventListener("click", function () {
      const rentType = rentSelect.value;
      const currency = currencySelect.value;
      const location = locationInput.value;
      const houseType = houseSelect.value;
      const rooms = roomsSelect.value;

      alert(`🔍 Searching:\n${rentType} ${houseType}\nLocation: ${location}\nRooms: ${rooms}\nCurrency: ${currency}`);
    });
  });
  // <!-- AOS JS 

  AOS.init();

  // Dummy range display values (can connect to dynamic values later)
  const rangeMin = document.getElementById('rangeMin');
  const rangeMax = document.getElementById('rangeMax');
  const minValue = document.getElementById('minValue');
  const maxValue = document.getElementById('maxValue');

  rangeMin.addEventListener('input', () => {
    minValue.textContent = `$${(rangeMin.value * 200).toLocaleString()}`;
  });

  rangeMax.addEventListener('input', () => {
    maxValue.textContent = `$${(rangeMax.value * 200).toLocaleString()}`;
  });
 // about us number count 
// ✅ Animate Counter
  function animateCounter(el, target) {
    let count = 0;
    const speed = 100; // smaller = faster
    const step = target / speed;

    function update() {
      count += step;
      if (count < target) {
        el.innerText = Math.ceil(count).toLocaleString();
        requestAnimationFrame(update);
      } else {
        el.innerText = target.toLocaleString();
      }
    }

    update();
  }

  const counters = document.querySelectorAll(".stats-number");
  let animated = false;

  window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".aboutus");
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos && !animated) {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        animateCounter(counter, target);
      });
      animated = true;
    }
  });
