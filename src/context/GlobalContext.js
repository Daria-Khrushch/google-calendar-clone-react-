import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: null,
  setDaySelected: (day) => {},
  showModal: false,
  setShowModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  setLabels: () => {},
  filteredEvents: [],
  updateLabel: () => {},
});

export default GlobalContext;
