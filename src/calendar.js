export function calendar() {
  const datePickBox = document.getElementById('date-pick-box');
  const calendarContainer = document.getElementById('calendar-container');
  const currentYearElement = document.getElementById('currentYear');
  const currentMonthElement = document.getElementById('currentMonth');
  const calendarNav = document.getElementById('calendarNav');
  let selectedDate;

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  function drawCalendar(year, month) {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';

    const headerRow = document.createElement('div');
    headerRow.className = 'day-row';
    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement('div');
      dayElement.className = 'day';
      dayElement.textContent = day;
      headerRow.appendChild(dayElement);
    });
    calendarGrid.appendChild(headerRow);

    const firstDate = new Date(year, month - 1, 1);
    const lastDate = new Date(year, month, 0);
    const firstDay = firstDate.getDay();
    const lastDay = lastDate.getDate();

    let dateCounter = 1;

    for (let i = 0; dateCounter <= lastDay; i++) {
      const dateRow = document.createElement('div');
      dateRow.className = 'date-row';

      for (let j = 0; j < 7; j++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'date';

        const dayIndex = i * 7 + j;

        if (dateCounter <= lastDay) {
          if (i === 0 && j < firstDay) {
            // 이전 달의 마지막 날짜를 표시
            const prevMonthLastDate = new Date(year, month - 1, 0);
            const prevMonthDate = new Date(
              prevMonthLastDate.getFullYear(),
              prevMonthLastDate.getMonth(),
              prevMonthLastDate.getDate() - (firstDay - j - 1)
            );
            dateElement.textContent = prevMonthDate.getDate();
            dateElement.dataset.dayOfWeek = daysOfWeek[dayIndex % 7];
            dateElement.classList.add('prev-month');
          } else {
            // 이번 달의 날짜를 표시
            const current = new Date(year, month - 1, dateCounter);
            dateElement.textContent = current.getDate();
            dateElement.dataset.dayOfWeek = daysOfWeek[j];
            dateCounter++;
          }
        } else {
          const nextMonthDate = new Date(year, month, dateCounter - lastDay);
          dateElement.textContent = nextMonthDate.getDate();
          dateElement.classList.add('next-month');
          dateCounter++;
        }

        dateRow.appendChild(dateElement);
      }

      calendarGrid.appendChild(dateRow);
    }
  }

  datePickBox.addEventListener('click', function () {
    calendarContainer.classList.toggle('visible');
  });

  function updateUI() {
    currentYearElement.textContent = currentYear;
    currentMonthElement.textContent = months[currentMonth - 1];
  }

  updateUI();

  drawCalendar(currentYear, currentMonth);

  function convertTwoDigits(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('date')) {
      if (calendarContainer.classList.contains('visible')) {
        calendarContainer.classList.remove('visible');
      }

      selectedDate = event.target.textContent;
      datePickBox.textContent = `
      ${currentYear}-${convertTwoDigits(currentMonth)}-${convertTwoDigits(
        selectedDate
      )}`;
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target === datePickBox) {
      return;
    }
  });

  if (calendarNav) {
    calendarNav.addEventListener('click', function (event) {
      const target = event.target;
      if (target.classList.contains('nav-button')) {
        const action = target.getAttribute('data-action');
        handleButtonClick(action);
      }
    });
  }

  function handleButtonClick(action) {
    switch (action) {
      case 'prevYear':
        currentYear -= 1;
        break;
      case 'prevMonth':
        if (currentMonth === 1) {
          currentYear -= 1;
          currentMonth = 12;
        } else {
          currentMonth -= 1;
        }
        break;
      case 'nextMonth':
        if (currentMonth === 12) {
          currentYear += 1;
          currentMonth = 1;
        } else {
          currentMonth += 1;
        }
        break;
      case 'nextYear':
        currentYear += 1;
        break;
      default:
        break;
    }

    updateUI();
    drawCalendar(currentYear, currentMonth);
  }
}
