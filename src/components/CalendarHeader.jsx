import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import logo from "./../assets/logo.png";
import dayjs from "dayjs";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleToday() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button className="border rounded py2 px-4 mr-5" onClick={handleToday}>
        Today
      </button>
      <button>
        <span
          className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
          onClick={handlePrevMonth}
        >
          chevron_left
        </span>
      </button>
      <button>
        <span
          className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
          onClick={handleNextMonth}
        >
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
