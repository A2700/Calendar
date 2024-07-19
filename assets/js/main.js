//** Clock Analog */
function cloneTicks() {
    for (var i = 1; i <= 12; i++) {
    var el = document.querySelector(".fiveminutes");
    var clone = el.cloneNode(true);
    clone.setAttribute('class', `fiveminutes f${i}`);
    var app = document.getElementById("analog").appendChild(clone)
    var el2 = document.querySelector(`.f${i}`);
    el2.style.transform = `rotate(${30 * i}deg)`;
    }
    
    for (var i = 1; i <= 60; i++) {
    var el = document.querySelector(".minutes");
    var clone = el.cloneNode(true);
    clone.setAttribute('class', `minutes m${i}`);
    var app = document.getElementById("analog").appendChild(clone)
    var el2 = document.querySelector(`.m${i}`);
    el2.style.transform = `rotate(${6 * i}deg)`;
    }
}

var synth = window.speechSynthesis;

const sechand = document.querySelector('.sec')
const minhand = document.querySelector('.min')
const hourhand = document.querySelector('.hour')

var sec, min, hour;


function setTime() {

    const now = new Date();
    //console.log(now);
    
    sec = now.getSeconds()
    const secdeg = ((sec / 60) * 360);
    sechand.style.transform = `rotate(${secdeg}deg)`;
    
    min = now.getMinutes();
    const mindeg = ((min / 60) * 360);
    minhand.style.transform = `rotate(${mindeg}deg)`;
    
    hour = now.getHours();
    const hourdeg = ((hour + min/60) / 12 * 360);
    hourhand.style.transform = `rotate(${hourdeg}deg)`;
}   

cloneTicks();	
setInterval(setTime, 1000);

//** Calendar Iranian And Georagian */
function showDateTime() {
    var georagian = document.getElementById("georagian");

    var date = new Date();
    var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    //var time = hour + ":" + min + ":" + sec;
    georagian.innerText = `${today}`;
    }
    setInterval(showDateTime, 1000);
    getPersianDate = (format) => { 
    var georagian = document.getElementById("iranian");

    let week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "آدینه", "شنبه")
    let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
    let today = new Date();
    let d = today.getDay();
    let day = today.getDate();
    let month = today.getMonth() ;
    let year = today.getYear() + 1300;
    year = (window.navigator.userAgent.indexOf('MSIE') > 0) ? year : 1900 + year;
    if (year == 0) {
        year = 2000;
    }
    if (year < 100) {
        year += 1900;
    }
    y = 1;
    for (i = 0; i < 3000; i += 4) {
        if (year == i) {
            y = 2;
        }
    }
    for (i = 1; i < 3000; i += 4) {
        if (year == i) {
            y = 3;
        }
    }
    if (y == 1) {
        year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
                break;
            case 2:
                (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
                break;
            case 3:
                (day < 21) ? (month = 12, day += 9) : (month = 1, day -= 20);
                break;
            case 4:
                (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
                break;
            case 5:
            case 6:
                (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
                break;
            case 10:
                (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
                break;
            case 11:
            case 12:
                (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
                break;
            default:
                break;
        }
    }
    if (y == 2) {
        year -= ((month < 3) || ((month == 3) && (day < 20))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
                break;
            case 2:
                (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
                break;
            case 3:
                (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19);
                break;
            case 4:
                (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19);
                break;
            case 5:
                (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20);
                break;
            case 6:
                (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20);
                break;
            case 7:
                (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21);
                break;
            case 8:
                (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21);
                break;
            case 9:
                (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21);
                break;
            case 10:
                (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21);
                break;
            case 11:
                (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20);
                break;
            case 12:
                (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20);
                break;
            default:
                break;
        }
    }
    if (y == 3) {
        year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19);
                break;
            case 2:
                (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18);
                break;
            case 3:
                (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20);
                break;
            case 4:
                (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
                break;
            case 5:
            case 6:
                (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
                break;
            case 10:
                (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
                break;
            case 11:
            case 12:
                (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
                break;
            default:
                break;
        }
    }
    if(format===null || format===undefined)
        return `${week[d]} ${day} ${months[month - 1]} ${year}`
    if(format==="y/m/d")
        return `${year}/${month}/${day}`;
    if(format==="d/m/y")
        return `${day}/${month}/${year}`;
    }
    iranian.innerText = getPersianDate();
    console.log(getPersianDate());
    console.log(getPersianDate("y/m/d"));
    console.log(getPersianDate("d/m/y"));

//** JSON Javascript */
var data = [
    {
    "days": [1, 2, 3, 4, 5, 6, 7],
    "menuItems": [{
        "name": "۱ فروردین - آغاز نوروز"
    }, {
        "name": "۲ فروردین - روز جهانی آب"
    }, {
        "name": "۳ فروردین - روز جهانی هواشناسی"
    }, {
        "name": "۶ فروردین - زادروز زرتشت روز امید و شادباش نویسی"
    }, {
        "name": "۱۳ فروردین - جشن سیزده بدر"
    }, {
        "name": "۱۹ فروردین - فروردینگان روز جهانی بهداشت و سلامت"
    }, {
        "name": "۲۵ فروردین - بزرگداشت عطار نیشابوری"
    }],
    "name": "مناسبت های فروردین ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7, 8],
    "menuItems": [{
        "name": "۱ اردیبهشت - بزرگداشت سعدی"
    }, {
        "name": "۲ اردیبهشت - سر برآوردن مومیایی رضا شاه بزرگ در تهران سال ۹۷"
    }, {
        "name": "۱۰ اردیبهشت - جشن چهلم نوروز، روز ملی خلیج پارس"
    }, {
        "name": "۱۱ اردیبهشت - روز جهانی کار و کارگر"
    }, {
        "name": "۲۲ اردیبهشت - زادروز مریم میرزاخانی"
    }, {
        "name": "۲۵ اردیبهشت - بزرگداشت حکیم ابوالقاسم فردوسی، پاسداشت زبان پارسی"
    }, {
        "name": "۲۷ اردیبهشت - روز قانون اساسی (ارائه نخستین پیشنویس پیشنهادی قانون اساسی برای ایرانی آزاد و دموکراتیک)"
    },
    {
        "name": "۲۸ اردیبهشت - بزرگداشت حکیم عمر خیام، روز جهانی موزه و میراث فرهنگی"
    }],
    "name": "مناسبت های اردیبهشت ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6],
    "menuItems": [{
        "name": "۵ خرداد - سالروز اولین فوران نفت در ایران و خاورمیانه"
    }, {
        "name": "۱۵ خرداد - جشن خردادگان، روز جهانی محیط زیست"
    }, {
        "name": "۲۲ خرداد - روز جهانی مبارزه با کار کردن کودکان"
    }, {
        "name": "۳۰ خرداد - روز ندا آقا سلطان، یادبود قهرمانان راه آزادی، روز جوان"
    }],
    "name": "مناسبت های خرداد ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3],
    "menuItems": [{
        "name": "۱۵ تیر - تیرگان، روز قلم"
    }, {
        "name": "۱۸ تیر - روز دانشجو"
    }, {
        "name": "۲۲ تیر - بزرگداشت خوارزمی"
    }],
    "name": "مناسبت های تیر ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4],
    "menuItems": [{
        "name": "۷ مرداد - روز پدر"
    }, {
        "name": "۱۰ مرداد - جشن چله ی تابستان"
    }, {
        "name": "۱۴ مرداد - صدور فرمان مشروطیت"
    },
    {
        "name": "۲۸ مرداد - سالروز فاجعه ی آتش زدن سینما رکس، سالروز کشتار مردم کردستان به دستور خمینی در سال ۵۸، شکست کودتای چپ در سال ۳۲"
    }],
    "name": "مناسبت های مرداد ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "menuItems": [{
        "name": "۱ شهریور - بزرگداشت ابوعلی سینا، روز پزشک"
    }, {
        "name": "۴ شهریور - زادروز کوروش بزرگ"
    }, {
        "name": "۵ شهریور - بزرگداشت زکریای رازی، روز داروساز"
    },
    {
        "name": "۱۳ شهریور - بزرگداشت ابوریحان بیرونی"
    },{
        "name": "۱۵ شهریور - شهریورگان"
    }, {
        "name": "۱۸ شهریور بزرگداشت دختر آبی زنده یاد سحر خدایاری"
    }, {
        "name": "۲۰ شهریور - حمله به برجهای دوقلوی مرکز تجارت جهانی"
    },
    {
        "name": "۲۲ شهريور - روز بزرگداشت زنده یاد پهلوان نوید افکاری، روز ورزشکار"
    },{
        "name": "۲۵ شهریور - قتل زنده یاد مهسا (ژینا) امینی به دست سرکوبگران رژیم اسلامی"
    }, {
        "name": "۲۶ شهريور - آغاز قیام مردمی اعتراض به قتل زنده یاد مهسا امینی"
    }, {
        "name": "۳۰ شهریور - زادروز زنده یاد مهسا امینی"
    }],
    "name": "مناسبت های شهریور ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7, 8],
    "menuItems": [{
        "name": "۸ مهر - بزرگداشت مولانا"
    }, {
        "name": "۱۰ مهر - زادروز زنده یاد نیکا شاکرمی، روز نوجوان"
    }, {
        "name": "۱۳ مهر - روز معلم به یاد استاد ارژنگ داوودی"
    }, {
        "name": "۱۵ مهر - جشن مهرگان، روز ملی کودک"
    }, {
        "name": "۱۶ مهر - روز پیروزی فریدون و کاوه بر ضحاک"
    }, {
        "name": "۱۹ مهر - روز جهانی دختر"
    }, {
        "name": "۲۰ مهر - بزرگداشت حافظ"
    },
    {
        "name": "۲۳ مهر - روز عصای سفید"
    }],
    "name": "مناسبت های مهر ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "menuItems": [{
        "name": "۷ آبان - سالروز ورود کوروش به بابل"
    }, {
        "name": "۹ آبان - جشن هالوین"
    }, {
        "name": "۱۰ آبان - جشن آبانگان"
    },
    {
        "name": "۱۳ آبان - احترام به قوانین بین المللی"
    },{
        "name": "۱۵ آبان - جشن میانه پاییز"
    }, {
        "name": "۲۱ آبان - زادروز نیما یوشیج"
    }, {
        "name": "۲۴ آبان - آغاز قیام آبان ۹۸"
    },
    {
        "name": "۲۵ آبان - روز پسر (به یاد زنده یاد کیان پیر فلک و پویا بختیاری)، روز کارگر (به یاد زنده یاد محسن محمدپور)"
    },{
        "name": "۲۶ آبان - روز شجاعت (به یاد زنده یاد مهرداد معین فر)"
    }, {
        "name": "۲۸ آبان - آغاز قیام کشاورزان اصفهان، روز کشاورز"
    }, {
        "name": "۲۹ آبان - روز جهانی مبارزه با کودک آزاری"
    }],
    "name": "مناسبت های آبان ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7],
    "menuItems": [{
        "name": "۳ آذر - آذر جشن"
    }, {
        "name": "۴ آذر - روز جهانی مبارزه با خشونت علیه زنان"
    }, {
        "name": "۹ آذر - آذرگان"
    }, {
        "name": "۱۲ آذر - روز جهانی توانخواهان"
    }, {
        "name": "۱۹ آذر - روز جهانی حقوق بشر"
    }, {
        "name": "۲۲ آذر - ترور روح الله زم، روز خبرنگار"
    }, {
        "name": "۲۴ آذر - آغاز پادشاهی رضا شاه بزرگ توسط مجلس موسسان"
    }],
    "name": "مناسبت های آذر ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7],
    "menuItems": [{
        "name": "۳ دی - شروع قیام دی ۹۶"
    }, {
        "name": "۴ دی - کریسمس، بزرگداشت رودکی"
    }, {
        "name": "۱۱ دی - آغاز سال نو میلادی"
    }, {
        "name": "۱۳ دی - جشن کتلت مذگان، روز ملی صلح و دوستی"
    }, {
        "name": "۱۵ دی - دیگان"
    }, {
        "name": "۲۶ دی - کودتای ۲۶ دی علیه پادشاه ایران"
    }, {
        "name": "۳۰ دی - فاجعه پلاسکو، روز آتش نشان"
    }],
    "name": "مناسبت های دی ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6],
    "menuItems": [{
        "name": "۱ بهمن - زادروز حکیم ابوالقاسم فردوسی"
    }, {
        "name": "۴ بهمن - آغاز پادشاهی کوروش بزرگ"
    }, {
        "name": "۵ بهمن - جشن نوسره"
    }, {
        "name": "۱۰ بهمن - جشن سده"
    }, {
        "name": "۱۵ بهمن - جشن بهمنگان"
    }, {
        "name": "۲۵ بهمن - ولنتاین، روز عشق"
    }],
    "name": "مناسبت های بهمن ۲۷۰۲",
    "_id": 0
},
{
    "days": [1, 2, 3, 4, 5, 6, 7],
    "menuItems": [{
        "name": "۳ اسفند - سالروز کودتای سردار سپه"
    }, {
        "name": "۵ اسفند - سپندارمذگان و روز عشق، روز بزرگداشت زمین"
    }, {
        "name": "۱۵ اسفند - روز درختکاری"
    }, {
        "name": "۱۷ اسفند - روز جهانی زن"
    }, {
        "name": "۲۱ اسفند - بزرگداشت نظامی گنجوی"
    }, {
        "name": "۲۳ اسفند - جشن ملی چهارشنبه سوری"
    }, {
        "name": "۲۴ اسفند - زادروز رضا شاه بزرگ"
    }],
    "name": "مناسبت های اسفند ۲۷۰۲",
    "_id": 0
},
];
let menuContainer = document.getElementsByClassName('holiday')[0];
for (let i = 0; i < data.length; i++) {
menuContainer.innerHTML += `
    <div id="holiday">
        <h2 class="holiday_header">${data[i].name}</h2>
        <h3 class="holiday_text">
            
        </h3>
    </div>
`;
let menu = data[i].menuItems;
for (let j = 0; j < menu.length; j++) {
    let menuItemWrap = document.createElement('ul');
    menuItemWrap.className = 'menu';
    
    let item = document.createElement('li');
    item.className = "menu-item";
    item.innerHTML = menu[j].name;
    document.getElementsByClassName('holiday_text')[i].appendChild(menuItemWrap).appendChild(item);
}
}
//** Night Mode */
var body = document.querySelector("body");

function updateClock() {
  // Get date
  var date = new Date();

  // Get hours and minutes
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  
  var time = hours + ":" + minutes;

  timeDisplay.innerHTML = time;
}

// Update every second
setInterval(updateClock, 1000);
setInterval(check, 1000);

// Check for date or night
function check() {
  
  // Get date
  var date = new Date();
  // Get hours
  var hours = date.getHours();
  
  if (hours >= 5 && hours <= 17) {
    
    var elements = [body];
    
    elements.forEach(function(element) {
      element.classList.remove("nightmode");
      element.classList.add("day");
    });

  } else {
    // Night Time
    
    var elements = [body];
    
    elements.forEach(function(element) {
      element.classList.remove("day");
      element.classList.add("nightmode");
    });
    }
    
}



//** Copy Clipboard */
const answer = document.getElementById("tooltip");
const copy = document.getElementById("bitcoin");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("copy")

copy.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer.innerHTML = 'کپی شد !';
    } else {
      answer.innerHTML = 'مشکلی پیش آمد !';  
    }
    window.getSelection().removeAllRanges()
});
