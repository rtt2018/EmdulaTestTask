import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimePeriods } from "../../redux/time/selectors";
import {
  setIsTimeSelectedAction,
  setSelectedTimeAction,
} from "../../redux/time/slice";
import { getSelectedDateSelector } from "../../redux/date/selectors";

export default function TimeSelection() {
  const [selectedTime, setSelectedTime] = useState(null);
  const disableButton = !selectedTime;
  const selectOptions = useSelector(getTimePeriods);
  const dispatch = useDispatch();
  const dateHead = useSelector(getSelectedDateSelector);
  const formatted = new Date(dateHead).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-6 p-2 h-132.5 border-l-[0.7px] border-l-[rgba(253,252,252,0.25)] relative">
      <div className="font-inter font-normal text-base leading-normal text-white/50">
        {formatted}
      </div>
      <ul
        className="flex flex-col gap-2 w-61 h-117.5 overflow-y-auto scrollbar-hide bg-[linear-gradient(180deg,rgba(22,18,29,0)_0%,#16121d_100%)]
        bg-no-repeat bg-size-[100%_236px] bg-bottom"
      >
        {selectOptions.map((opt) => {
          const isSelected = selectedTime?.value === opt.value;
          return (
            <li
              key={opt.value}
              onClick={() => {
                if (isSelected) {
                  dispatch(setSelectedTimeAction(null));
                } else {
                  dispatch(setSelectedTimeAction(opt.value));
                }
                return isSelected
                  ? setSelectedTime(null)
                  : setSelectedTime(opt);
              }}
              className={`
                cursor-pointer border-2 border-[#fabf42]  rounded-lg py-2 px-6 w-59 h-10 flex flex-col items-center justify-center gap-2.5
                hover:border-[#d18e1b]  hover:bg-[#0c0614]
                active:border-[rgba(177,96,9,0.2)] 
                ${isSelected ? "bg-[#fabf42] text-[#0c0614] hover:bg-[#fabf42] hover:text-[#0c0614]" : "bg-transparent text-[#d18e1b] hover:border-[#d18e1b] hover:text-[#d18e1b] active:border-[rgba(177,96,9,0.2)] active:text-[#a86415]"}
            `}
            >
              {opt.label}
            </li>
          );
        })}
      </ul>
      <button
        disabled={disableButton}
        type="button"
        onClick={() => {
          dispatch(setIsTimeSelectedAction(true));
        }}
        className="absolute bottom-0 flex items-center justify-center flex-row gap-2 rounded-[100px] px-12 py-4 w-61 h-14 bg-[#e9ac32]
      hover:bg-[#d18e1b] active:bg-[#a86415] active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)] transition-colors duration-200
        font-inter font-medium text-lg leading-[1.55556] text-[#0c0614] disabled:bg-[#8f8c84] disabled:text-[#252422] z-1000"
      >
        Next
      </button>
      <div className="absolute z-999 pointer-events-none bottom-0 left-0 w-65 h-59 bg-linear-to-b from-[rgba(22,18,29,0)] to-[#16121d]"></div>
    </div>
  );
}
