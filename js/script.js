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
    slidesPerView: 1, // default (below 480px)
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
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
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stats-number");

    const options = {
      threshold: 0.5, // Start animation when 50% of element is in view
    };

    const startCounting = (entry) => {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = 50; // Smaller = faster

      const update = () => {
        count += Math.ceil(target / speed);
        if (count < target) {
          counter.innerText = count.toLocaleString();
          requestAnimationFrame(update);
        } else {
          counter.innerText = target.toLocaleString() + "+";
        }
      };

      update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry);
          observer.unobserve(entry.target); // stop observing once animated
        }
      });
    }, options);

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });
