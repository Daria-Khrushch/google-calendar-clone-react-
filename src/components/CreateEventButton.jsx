import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import plus from "./../assets/plus.svg";

export default function CreateEventButton() {
  const { setShowModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => {
        setShowModal(true);
      }}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plus} alt="plus icon" className="w-7 h-7 " />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
}
