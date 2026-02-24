import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import TimeZoneComponent from "../TimeZoneComponent/TimeZoneComponent";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 border-t border-white/25 p-7 w-[700px]">
      <div className="flex flex-col items-start justify-start gap-6 w-[344px]">
        <h4 className="font-primary font-semibold text-[20px] leading-[1.2] text-[#f4f1eb]">
          Select a Date & Time
        </h4>
        <DatePickerComponent />
        <TimeZoneComponent />
        <div>TimeZone</div>
      </div>
      <div>Cookie settings</div>
    </div>
  );
}
