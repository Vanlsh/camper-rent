import { useState } from "react";
import icons from "../../assets/icons.svg";
import { generateCalendar, isSameDate } from "../../helpers/calendar";
import css from "./Calendar.module.css";
import clsx from "clsx";
import { daysOfWeek, months } from "../../constants";

const Calendar = ({ date: currentDate, handleSetDate, onClose }) => {
  const date = currentDate || new Date();
  const [selectedDate, setSelectedDate] = useState(date);

  const handlePrev = () => {
    setSelectedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
    );
  };

  const handleNext = () => {
    setSelectedDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
    );
  };

  const setDate = (date) => {
    handleSetDate(date);
    onClose();
  };

  const currentMonth = months[selectedDate.getMonth()];
  const currentYear = selectedDate.getFullYear();
  const days = generateCalendar(selectedDate.getMonth() + 1, currentYear);
  return (
    <div className={css.container} onClick={(e) => e.stopPropagation()}>
      <div className={css.header}>
        <button
          onClick={handlePrev}
          className={css.button}
          type="button"
          aria-label="previous month"
        >
          <svg className={clsx(css.icon, css.prev)} width={24} height={24}>
            <use xlinkHref={icons + "#icon-arrow"}></use>
          </svg>
        </button>
        <p className={css.monthYear}>{currentMonth + " " + currentYear}</p>
        <button
          onClick={handleNext}
          className={css.button}
          type="button"
          aria-label="previous month"
        >
          <svg className={clsx(css.icon, css.next)} width={24} height={24}>
            <use xlinkHref={icons + "#icon-arrow"}></use>
          </svg>
        </button>
      </div>
      <ul className={css.weekList}>
        {daysOfWeek.map((day) => (
          <li key={day}>{day}</li>
        ))}
      </ul>
      <ul className={css.dayList}>
        {days.map((day, index) => (
          <li key={index}>
            <button
              className={clsx({
                [css.selected]: isSameDate(date, day),
                [css.notThisMonth]: selectedDate.getMonth() !== day.getMonth(),
              })}
              type="button"
              onClick={() => setDate(day)}
            >
              {day.getDate()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;

// import { forwardRef, useState } from "react";
// import { BookInput } from "../UI";
// import DatePicker from "react-datepicker";
// import icons from "../../assets/icons.svg";
// import "react-datepicker/dist/react-datepicker.css";

// const Calendar = () => {
//   const [startDate, setStartDate] = useState(null);
//   const Input = forwardRef(function Input({ value, onClick }, ref) {
//     return (
//       <BookInput
//         type="text"
//         value={startDate ? value : ""}
//         placeholder="Booking date"
//         iconPath={icons + "#icon-calendar"}
//         onClick={onClick}
//         ref={ref}
//         style={{ cursor: "pointer" }}
//         disable
//       />
//     );
//   });
//   return (
//     <DatePicker
//       selected={startDate || new Date()}
//       onChange={(date) => setStartDate(date)}
//       customInput={<Input />}
//     />
//   );
// };

// export default Calendar;

// import { useState } from "react";
// import "./Clendar.css"; // You'll create this CSS file for styling

// const Calendar = () => {
//   const today = new Date();
//   const [currentDate, setCurrentDate] = useState(today);

//   // Helpers to get the first day and total days in the month
//   const getFirstDayOfMonth = (date) =>
//     new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   const getDaysInMonth = (date) =>
//     new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

//   // Change month
//   const changeMonth = (monthOffset) => {
//     setCurrentDate(
//       new Date(
//         currentDate.getFullYear(),
//         currentDate.getMonth() + monthOffset,
//         1
//       )
//     );
//   };

//   const renderHeader = () => (
//     <div className="calendar-header">
//       <button type="button" onClick={() => changeMonth(-1)}>
//         Previous
//       </button>
//       <h2>
//         {currentDate.toLocaleString("default", { month: "long" })}{" "}
//         {currentDate.getFullYear()}
//       </h2>
//       <button onClick={() => changeMonth(1)}>Next</button>
//     </div>
//   );

//   const renderDaysOfWeek = () => {
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     return (
//       <div className="calendar-days">
//         {days.map((day) => (
//           <div key={day} className="calendar-day">
//             {day}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderDates = () => {
//     const firstDayOfMonth = getFirstDayOfMonth(currentDate);
//     const daysInMonth = getDaysInMonth(currentDate);
//     const dates = [];

//     // Filling up empty slots before the first day
//     for (let i = 0; i < firstDayOfMonth; i++) {
//       dates.push(<div key={`empty-${i}`} className="calendar-date empty" />);
//     }

//     // Filling up the actual days
//     for (let day = 1; day <= daysInMonth; day++) {
//       dates.push(
//         <div
//           key={day}
//           className={`calendar-date ${
//             day === today.getDate() &&
//             currentDate.getMonth() === today.getMonth()
//               ? "today"
//               : ""
//           }`}
//         >
//           {day}
//         </div>
//       );
//     }

//     return <div className="calendar-dates">{dates}</div>;
//   };

//   return (
//     <div className="calendar">
//       {renderHeader()}
//       {renderDaysOfWeek()}
//       {renderDates()}
//     </div>
//   );
// };

// export default Calendar;
