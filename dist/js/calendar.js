const monthNames = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
const dayNames = ["ش", "ی", "د", "س", "چ", "پ", "آ"];
const fullday = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "آدینه"];
let currentMonth, currentYear;

async function fetchCurrentDate() {
    try {
        const response = await fetch('http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=zone&zone=Asia/Tehran');
        const data = await response.json();
        const date = new Date(data.datetime);
        const jalaaliDate = jalaali.toJalaali(date.getFullYear() + 1300, date.getMonth() + 1, date.getDate());
        return {
            year: jalaaliDate.jy,
            month: jalaaliDate.jm,
            day: jalaaliDate.jd
        };
    } catch (error) {
        console.error('Error fetching date:', error);
        return null;
    }
}

async function fetchEvents(month) {
    try {
        const response = await fetch('./components/events.json');
        const events = await response.json();
        return events.filter(event => {
            const [eMonth] = event.date.split('-').map(Number);
            return eMonth === month;
        });
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

async function renderCalendar(month, year, today) {
    const calendarBody = document.getElementById('calendarBody');
    calendarBody.innerHTML = '';

    const monthYear = document.getElementById('monthYear');
    monthYear.textContent = `${monthNames[month - 1]} ${year}`;

    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        calendarBody.appendChild(dayElement);
    });

    const firstDay = new Date(jalaali.toGregorian(year, month, 1).gy, jalaali.toGregorian(year, month, 1).gm - 1, 1).getDay() + 3;
    const daysInMonth = jalaali.jalaaliMonthLength(year, month);

    const events = await fetchEvents(month);
    const eventElement = document.getElementById('event');
    eventElement.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarBody.appendChild(emptyCell);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = i;
        dayCell.classList.add('day');

        const event = events.find(e => {
            const [eMonth, eDay] = e.date.split('-').map(Number);
            return eMonth === month && eDay === i;
        });

        if (event) {
            const eventDiv = document.createElement('div');
            eventDiv.textContent = `${event.icon} ${event.event}`;
            eventDiv.classList.add('event');
            eventDiv.style.color = event.color;
            dayCell.appendChild(eventDiv);

            const eventListItem = document.createElement('div');
            eventListItem.textContent = `${event.date}: ${event.icon} ${event.event}`;
            eventElement.appendChild(eventListItem);
        }

        if (today && i === today.day && month === today.month && year === today.year) {
            dayCell.classList.add('current-day');
        }

        calendarBody.appendChild(dayCell);
    }

    const currentDate = document.getElementById('currentDate');
    currentDate.textContent = `امروز ${today.day} ${monthNames[today.month - 1]} ${today.year}`;
}

document.getElementById('prevMonth').addEventListener('click', async () => {
    currentMonth--;
    if (currentMonth < 1) {
        currentMonth = 12;
        currentYear--;
    }
    await renderCalendar(currentMonth, currentYear);
});

document.getElementById('nextMonth').addEventListener('click', async () => {
    currentMonth++;
    if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
    }
    await renderCalendar(currentMonth, currentYear);
});

(async function initializeCalendar() {
    const today = await fetchCurrentDate();
    if (today) {
        currentMonth = today.month;
        currentYear = today.year;
        await renderCalendar(currentMonth, currentYear, today);
    }
})();
