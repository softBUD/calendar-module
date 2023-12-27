export function calendar() {
  const datePickBox = document.getElementById('date-pick-box')
  const calendarContainer = document.getElementById('calendar-container')
  const currentYearElement = document.getElementById('currentYear')
  const currentMonthElement = document.getElementById('currentMonth')
  const calendarNav = document.getElementById('calendarNav')

  const currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1
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
  ]

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  function drawCalendar(year, month) {
    const calendarGrid = document.getElementById('calendarGrid')
    calendarGrid.innerHTML = ''

    const headerRow = document.createElement('div')
    headerRow.className = 'day-row'
    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement('div')
      dayElement.className = 'day'
      dayElement.textContent = day
      headerRow.appendChild(dayElement)
    })
    calendarGrid.appendChild(headerRow)

    const firstDate = new Date(year, month - 1, 1)
    const lastDate = new Date(year, month, 0)
    const firstDay = firstDate.getDay()
    const lastDay = lastDate.getDate()

    let dateCounter = 1

    for (let i = 0; i < 5; i++) {
      const dateRow = document.createElement('div')
      dateRow.className = 'date-row'

      for (let j = 0; j < 7; j++) {
        const dateElement = document.createElement('div')
        dateElement.className = 'date'

        const dayIndex = i * 7 + j
        const prevMonthDays = firstDay === 0 ? 6 : firstDay - 1

        if (dateCounter <= lastDay) {
          if (i === 0 && dayIndex < prevMonthDays) {
            // Draw previous month's dates in the first week
            const prevMonthLastDate = new Date(currentYear, currentMonth - 1, 0)
            const prevMonthDate = new Date(
              currentYear,
              currentMonth - 1,
              prevMonthLastDate.getDate() - (prevMonthDays - j)) //prettier-ignore
            console.log(prevMonthDays, j)
            dateElement.textContent = prevMonthDate.getDate()
            dateElement.dataset.dayOfWeek = daysOfWeek[dayIndex % 7] // Modify this line
            dateElement.classList.add('prev-month')
          } else {
            const current = new Date(currentYear, currentMonth, dateCounter)
            dateElement.textContent = current.getDate()
            console.log(current.getDay())
            dateElement.dataset.dayOfWeek = daysOfWeek[j]
            dateCounter++
          }
        } else {
          // Draw next month's dates
          const nextMonthDate = new Date(year, month, dateCounter - lastDay)
          dateElement.textContent = nextMonthDate.getDate()
          dateElement.classList.add('next-month')
          dateCounter++
        }

        dateRow.appendChild(dateElement)
      }

      calendarGrid.appendChild(dateRow)
    }
  }

  datePickBox.addEventListener('click', function () {
    calendarContainer.classList.toggle('visible')
  })

  function updateUI() {
    currentYearElement.textContent = currentYear
    currentMonthElement.textContent = months[currentMonth - 1]
  }

  updateUI()

  drawCalendar(currentYear, currentMonth)

  document.addEventListener('click', function (event) {
    if (event.target === datePickBox) {
      return
    }

    if (!calendarContainer.classList.contains('visible')) {
      calendarContainer.classList.add('visible')
    }
  })

  if (calendarNav) {
    calendarNav.addEventListener('click', function (event) {
      const target = event.target
      if (target.classList.contains('nav-button')) {
        const action = target.getAttribute('data-action')
        handleButtonClick(action)
      }
    })
  }

  function handleButtonClick(action) {
    switch (action) {
      case 'prevYear':
        currentYear -= 1
        break
      case 'prevMonth':
        if (currentMonth === 1) {
          currentYear -= 1
          currentMonth = 12
        } else {
          currentMonth -= 1
        }
        break
      case 'nextMonth':
        if (currentMonth === 12) {
          currentYear += 1
          currentMonth = 1
        } else {
          currentMonth += 1
        }
        break
      case 'nextYear':
        currentYear += 1
        break
      default:
        break
    }

    updateUI()
    drawCalendar(currentYear, currentMonth)
  }
}
