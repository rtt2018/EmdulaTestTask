import { useState } from "react";
import { useSelector } from "react-redux";
import { getTimePeriods } from "../../redux/time/selectors";

export default function TimeSelection() {
  const [selectedTime, setSelectedTime] = useState(null);
  const disableButton = !selectedTime;
  const selectOptions = useSelector(getTimePeriods);

  return (
    <div className="flex flex-col gap-6 p-2 h-132.5">
      <div className="font-inter font-normal text-base leading-normal text-white/50">
        Thuesday, February 12
      </div>
      <ul className="flex flex-col gap-2 w-61  overflow-y-auto scrollbar-hide">
        {selectOptions.map((opt) => {
          const isSelected = selectedTime?.value === opt.value;

          return (
            <li
              key={opt.value}
              onClick={() =>
                isSelected ? setSelectedTime(null) : setSelectedTime(opt)
              }
              className={`
                cursor-pointer border-2 border-[#fabf42] rounded-lg py-2 px-6 w-59 h-10 flex flex-col items-center justify-center gap-2.5
                ${isSelected ? "bg-[#fabf42] text-[#0c0614]" : "bg-transparent text-[#d18e1b]"}
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
          console.log("click");
        }}
        className="flex items-center justify-center flex-row gap-2 rounded-[100px] px-12 py-4 w-61 h-14 bg-[#e9ac32]
      hover:bg-[#d18e1b] active:bg-[#a86415] active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)] transition-colors duration-200
        font-inter font-medium text-lg leading-[1.55556] text-[#0c0614] disabled:bg-[#8f8c84] disabled:text-[#252422]"
      >
        Next
      </button>
    </div>
  );
}
