import { useState } from "react";
import { DayPicker } from "react-day-picker";
// import "react-day-picker/style.css";

function CustomCaption({ date, onMonthChange }) {
  const month = date.toLocaleString("uk-UA", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between px-2 py-1">
      <button
        className="text-[#f4f1eb] font-inter font-normal text-base"
        onClick={() =>
          onMonthChange(new Date(date.getFullYear(), date.getMonth() - 1, 1))
        }
      >
        <svg width="9" height="15">
          <use href="/icon-sprite.svg#arrow"></use>
        </svg>
      </button>
      <span className="text-[#f4f1eb] font-inter font-normal text-base leading-6">
        {month}
      </span>

      <button
        className="text-[#f4f1eb] font-inter font-normal text-base"
        onClick={() =>
          onMonthChange(new Date(date.getFullYear(), date.getMonth() + 1, 1))
        }
      >
        <svg width="9" height="15">
          <use href="/icon-sprite.svg#arrow"></use>
        </svg>
      </button>
    </div>
  );
}

// Модифікатори
export default function DatePickerComponent() {
  const [selected, setSelected] = useState();
  return (
    <DayPicker
      className="bg-transparent"
      animate
      mode="single"
      weekStartsOn={1}
      selected={selected}
      onSelect={setSelected}
      disabled={[{ dayOfWeek: [0, 6] }, { before: new Date() }]}
      formatWeekday={(day) =>
        day.toLocaleDateString("en-US", { weekday: "short" })
      }
      modifiers={{
        today: new Date(),
        disabled: [{ dayOfWeek: [0, 6] }, { before: new Date() }, new Date()],
      }}
      modifiersClassNames={{
        disabled: "bg-transparent text-white/30 pointer-events-none",
        today:
          "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white/50",
      }}
      classNames={{
        root: "w-[344px] h-[344px] rounded-lg",
        month: "w-full h-full", // без flex
        weekdays: "grid grid-cols-7 mb-1 text-center text-[#f4f1eb]",
        week: "flex gap-[6px]",
        weeks: "flex gap-[6px] flex-col text-[#fed172]",
        weekday:
          "w-11 h-6 flex items-center justify-center font-inter font-medium text-sm text-[#f4f1eb]",
        chevron: "fill-amber-500",

        day: "pointer-events-auto bg-[#b1600933] rounded-[100px] w-11 h-11 flex items-center justify-center font-primary font-normal text-base leading-6 text-center relative ",
        selected:
          "bg-[#fed172] text-[#a86415] font-inter font-semibold text-base leading-6 flex items-center justify-center w-11 h-11 rounded-[100px]",
      }}
    />
  );
}
