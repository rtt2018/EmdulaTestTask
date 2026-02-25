import { useState } from "react";

export default function TimeSelection() {
  const [selectedTime, setSelectedTime] = useState(null);
  console.log("🚀 ~ TimeSelection ~ selectedTime:", selectedTime);
  const disableButton = !selectedTime;
  const selectOptions = [
    { label: "8:00", value: "8:00 - 8:30" },
    { label: "8:30", value: "8:30 - 9:00" },
    { label: "9:00", value: "9:00 - 9:30" },
    { label: "9:30", value: "9:30 - 10:00" },
    { label: "10:00", value: "10:00 - 10:30" },
    { label: "10:30", value: "10:30 - 11:00" },
    { label: "11:00", value: "11:00 - 11:30" },
    { label: "11:30", value: "11:30 - 12:00" },
    { label: "12:00", value: "12:00 - 12:30" },
    { label: "12:30", value: "12:30 - 13:00" },
    { label: "13:00", value: "13:00 - 13:30" },
    { label: "13:30", value: "13:30 - 14:00" },
    { label: "14:00", value: "14:00 - 14:30" },
    { label: "14:30", value: "14:30 - 15:00" },
    { label: "15:00", value: "15:00 - 15:30" },
    { label: "15:30", value: "15:30 - 16:00" },
    { label: "16:00", value: "16:00 - 16:30" },
    { label: "16:30", value: "16:30 - 17:00" },
    { label: "17:00", value: "17:00 - 17:30" },
    { label: "17:30", value: "17:30 - 18:00" },
    { label: "18:00", value: "18:00 - 18:30" },
    { label: "18:30", value: "18:30 - 19:00" },
    { label: "19:00", value: "19:00 - 19:30" },
    { label: "19:30", value: "19:30 - 20:00" },
  ];

  return (
    <div className="flex flex-col gap-6 p-2 h-132.5">
      <div className="font-inter font-normal text-base leading-[1.5] text-white/50">
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
        className="flex items-center justify-center flex-row gap-2 rounded-[100px] px-12 py-4 w-[244px] h-[56px] bg-[#e9ac32]
      hover:bg-[#d18e1b] active:bg-[#a86415] active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)] transition-colors duration-200
        font-inter font-medium text-lg leading-[1.55556] text-[#0c0614] disabled:bg-[#8f8c84] disabled:text-[#252422]"
      >
        Next
      </button>
    </div>
  );
}
