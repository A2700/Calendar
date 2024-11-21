document.addEventListener('DOMContentLoaded', function () {
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

});

// Timer
document.addEventListener('DOMContentLoaded', function () {
const countdownDate = new Date("November 29, 2024 00:00:00").getTime();
        const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.querySelector(".timer").textContent = "";
        }
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();

      });

      // Date    
      document.addEventListener('DOMContentLoaded', function () {
   const ddate = new Date();
   const jalaaliDate = jalaali.toJalaali(ddate.getFullYear(), ddate.getMonth() + 1, ddate.getDate());
   const shahanshahiYear = jalaaliDate.jy + 1180;
   const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
   const monthName = months[jalaaliDate.jm - 1];
   document.getElementById('shahanshahi').innerText = `${jalaaliDate.jd} ${monthName} ${shahanshahiYear}`;
   const gregorianYear = ddate.getFullYear();
   const gregorianMonth = ddate.toLocaleString('en-US', { month: 'long' });
   const gregorianDay = ddate.getDate();
   document.getElementById('gregorian').innerText = `${gregorianDay} ${gregorianMonth} ${gregorianYear}`;

  });
        
        // Mobile
        document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.tab-content').forEach(tab => {
              tab.classList.remove('active');
            });
            document.querySelectorAll('.nav-link').forEach(link => {
              link.classList.remove('active');
            });
            document.getElementById(this.getAttribute('data-tab')).classList.add('active');
            this.classList.add('active');
          });
        });

      });

      document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('btn-event').addEventListener('click', function() {
          if (window.innerWidth < 980) {
              var eventElement = document.getElementById('holiday');
              if (eventElement.style.display === 'none' || eventElement.style.display === '') {
                  eventElement.style.display = 'block';
              } else {
                  eventElement.style.display = 'none';
              }
          }
        });

      });

      document.addEventListener('DOMContentLoaded', function () {
      window.addEventListener('resize', function() {
          if (window.innerWidth >= 980) {
              document.getElementById('event').style.display = 'none';
          }
        });
      
      });
