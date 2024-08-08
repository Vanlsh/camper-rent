export const generateCalendar = (month, year) => {
  const result = [];

  const firstDayOfMonth = new Date(year, month - 1, 1);
  const lastDayOfMonth = new Date(year, month, 0);

  const startDay = firstDayOfMonth.getDay();
  const endDay = lastDayOfMonth.getDay() - 1;

  const prevMonthDaysCount = startDay === 0 ? 6 : startDay - 1;
  const prevMonthLastDay = new Date(year, month - 1, 0).getDate();

  for (let i = prevMonthDaysCount; i > 0; i--) {
    result.push(new Date(year, month - 2, prevMonthLastDay - i + 1));
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    result.push(new Date(year, month - 1, i));
  }

  const nextMonthDaysCount = endDay === 6 ? 0 : 6 - endDay;
  for (let i = 1; i <= nextMonthDaysCount; i++) {
    result.push(new Date(year, month, i));
  }
  return result;
};

export const isSameDate = (firstDate, secondDate) => {
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
};
