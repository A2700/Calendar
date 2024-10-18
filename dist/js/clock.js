const time = document.querySelector(".hours");
        const secHand = document.querySelector(".second");
        const minHand = document.querySelector(".minute");
        const hourHand = document.querySelector(".hour");

function startClock() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();

  // Adjust for Tehran time (UTC+3:30)
  const tehranHours = (utcHours + 3 + Math.floor((utcMinutes + 30) / 60)) % 24;
  const tehranMinutes = (utcMinutes + 30) % 60;
  const tehranSeconds = utcSeconds;

  let secDeg = tehranSeconds * (360 / 60);
  let minDeg = tehranMinutes * (360 / 60) + tehranSeconds / 12;
  let hourDeg = tehranHours * (360 / 12) + (tehranMinutes / 12) * (360 / 60);
  secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
  minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(startClock, 1000);
startClock(); 
