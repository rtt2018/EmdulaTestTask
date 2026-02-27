import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import TimeZoneComponent from "../TimeZoneComponent/TimeZoneComponent";
import { Toaster } from "react-hot-toast";
import CookieSettings from "../CookieSettings/CookieSettings";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 w-88 gap-8">
      <div className="flex flex-col items-start justify-start gap-6 w-86">
        <h4 className="font-primary font-semibold text-[20px] leading-[1.2] text-[#f4f1eb]">
          Select a Date & Time
        </h4>
        <DatePickerComponent />
        <TimeZoneComponent />
      </div>
      <CookieSettings />
      <Toaster />
    </div>
  );
}
