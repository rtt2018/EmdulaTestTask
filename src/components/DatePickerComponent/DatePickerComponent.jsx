import { useState } from "react";
import { DayPicker, useDayPicker } from "react-day-picker";

function CustomNav() {
  const { goToMonth, previousMonth, nextMonth, months } = useDayPicker();

  const displayMonth = months?.[0]?.date;
  if (!displayMonth) return null;

  const today = new Date();
  const startOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

  const prevHasActive = previousMonth >= startOfThisMonth;
  const nextHasActive = true;
  const activeBtnClasses =
    "w-11 h-11 flex justify-center items-center rounded-full bg-[rgba(177,96,9,0.2)]";
  const inactiveBtnClasses = "w-11 h-11 flex justify-center items-center";

  return (
    <div className="relative flex items-center justify-between w-full mb-4">
      <button
        onClick={() => prevHasActive && goToMonth(previousMonth)}
        disabled={!prevHasActive}
        className={
          prevHasActive
            ? activeBtnClasses
            : inactiveBtnClasses + " cursor-not-allowed"
        }
      >
        <svg
          width="9"
          height="15"
          fill={prevHasActive ? "#FED172" : "#FDFCFC"}
          fillOpacity="1"
        >
          <use href="/icon-sprite.svg#arrow" />
        </svg>
      </button>

      <div className="font-inter font-normal text-base leading-6 text-[#f4f1eb]">
        {displayMonth.toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </div>

      <button
        onClick={() => nextHasActive && goToMonth(nextMonth)}
        className={
          nextHasActive
            ? activeBtnClasses
            : inactiveBtnClasses + " cursor-not-allowed"
        }
      >
        <svg width="9" height="15" className="rotate-180 fill-[#fed172]">
          <use href="/icon-sprite.svg#arrow" />
        </svg>
      </button>
    </div>
  );
}

export default function DatePickerComponent() {
  const [selected, setSelected] = useState();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <DayPicker
      className="bg-transparent"
      mode="single"
      weekStartsOn={1}
      selected={selected}
      onSelect={setSelected}
      disabled={[{ dayOfWeek: [0, 6] }, { before: new Date() }]}
      formatters={{
        formatWeekdayName: (date) => weekdays[date.getDay()],
      }}
      modifiers={{
        today: new Date(),
        disabled: [{ dayOfWeek: [0, 6] }, { before: new Date() }, new Date()],
      }}
      modifiersClassNames={{
        disabled: "bg-transparent text-white/30 pointer-events-none",
        outside: "bg-transparent",
        today:
          "relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-white/50",
      }}
      classNames={{
        root: "w-[344px] h-[344px] rounded-lg overflow-hidden relative",
        month_caption: "hidden",
        nav: "inset-0 flex items-center justify-between",
        caption_label:
          "font-inter font-normal text-base leading-6 text-[#f4f1eb]",
        month: "w-[344px] h-auto text-[#f4f1eb] absolute",
        weekdays: "grid grid-cols-7 mb-4 text-center text-[#f4f1eb]",
        week: "flex gap-[6px]",
        weeks: "flex gap-[6px] flex-col text-[#fed172]",
        weekday:
          "w-11 h-6 flex items-center justify-center font-inter font-medium text-sm text-[#f4f1eb]",
        chevron: "fill-amber-500",

        day: "pointer-events-auto bg-[#b1600933] rounded-[100px] w-11 h-11 flex items-center justify-center font-primary font-normal text-base leading-6 text-center relative ",
        selected:
          "bg-[#fed172] text-[#a86415] font-inter font-semibold text-base leading-6 flex items-center justify-center w-11 h-11 rounded-[100px]",
      }}
      components={{
        Nav: CustomNav,
      }}
    />
  );
}
