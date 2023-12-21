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

  datePickBox.addEventListener('click', function () {
    calendarContainer.classList.toggle('visible')
  })

  function updateUI() {
    currentYearElement.textContent = currentYear
    currentMonthElement.textContent = months[currentMonth - 1]
  }

  updateUI()

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
  }
}
