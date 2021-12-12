function isDatePassed (datePassed, dateToday) {
  if (datePassed.setHours(0, 0, 0, 0) <= dateToday.setHours(0, 0, 0, 0)) {
    return true
  }

  return false
}

const dateHelper = {
  isDatePassed
}

module.exports = dateHelper
