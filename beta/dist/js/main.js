var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const countdownDate = new Date("September 26, 2024 00:00:00").getTime();
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
            document.querySelector(".timer").textContent = "EXPIRED";
        }
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown();


        var hourhand = document.getElementById('hrs');
var minutehane = document.getElementById('min');
var secondhand = document.getElementById('sec');

function startclock(){
  var date = new Date();
  var hour = date.getHours() % 12;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  
  var hoursdeg = (hour * 30) + (0.5 * minute);
  var minutedeg = (minute * 6) + (0.1 * second);
  var seconddeg = second * 6;
  
  
  hourhand.style.transform = 'rotate('+hoursdeg+'deg)';
  minutehane.style.transform = 'rotate('+minutedeg+'deg)';
  secondhand.style.transform = 'rotate('+seconddeg+'deg)';
  
  setTimeout(startclock, 1000);
}
startclock();

const date = new Date();
        
        // تبدیل تاریخ به جلالی
        const jalaaliDate = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const shahanshahiYear = jalaaliDate.jy + 1180;

        const months = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
        const monthName = months[jalaaliDate.jm - 1];

        document.getElementById('shahanshahi-date').innerText = `تاریخ شاهنشاهی: ${shahanshahiYear} ${monthName} ${jalaaliDate.jd}`;

        // نمایش تاریخ میلادی به زبان انگلیسی
        const gregorianYear = date.getFullYear();
        const gregorianMonth = date.toLocaleString('en-US', { month: 'long' });
        const gregorianDay = date.getDate();

        document.getElementById('gregorian-date').innerText = `Gregorian Date: ${gregorianYear} ${gregorianMonth} ${gregorianDay}`;