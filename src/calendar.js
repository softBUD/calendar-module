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

  const daysOfWeek = ['SUN', 'MOM', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  function getDates(year, month) {
    const lastDay = new Date(year, month, 0).getDate()
    return Array.from({ length: lastDay }, (_, index) => index + 1)
  }

  function drawCalendar(year, month) {
    const calendarGrid = document.getElementById('calendarGrid')

    // 기존의 day-row가 없다면 새로 생성
    let dayRow = calendarGrid.querySelector('.day-row')
    if (!dayRow) {
      dayRow = document.createElement('div')
      dayRow.className = 'day-row'

      // 요일 표시
      daysOfWeek.forEach((day) => {
        const dayElement = document.createElement('div')
        dayElement.className = 'day'
        dayElement.textContent = day
        dayRow.appendChild(dayElement)
      })

      calendarGrid.appendChild(dayRow)
    }

    // 기존의 date가 남아있다면 제거
    const existingDates = Array.from(
      calendarGrid.getElementsByClassName('date'),
    )
    existingDates.forEach((dateElement) => {
      dateElement.remove()
    })

    // 날짜 표시
    const dates = getDates(year, month)
    dates.forEach((date) => {
      const dateElement = document.createElement('div')
      dateElement.className = 'date'
      dateElement.textContent = date

      // 요일 계산 및 표시
      const dayOfWeek = new Date(year, month - 1, date).getDay()
      dateElement.dataset.dayOfWeek = daysOfWeek[dayOfWeek]

      calendarGrid.appendChild(dateElement)
    })
  }

  datePickBox.addEventListener('click', function () {
    calendarContainer.classList.toggle('visible')
  })

  function updateUI() {
    currentYearElement.textContent = currentYear
    currentMonthElement.textContent = months[currentMonth - 1]
  }

  updateUI()

  drawCalendar(currentYear, currentDate.getMonth() + 1)

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
    drawCalendar(currentYear, currentDate.getMonth() + 1)
  }
}
