import { useSelector } from "react-redux";
import { memberDataSelector } from "../../redux/meetMember/selectors";
import { getSelectedTime, getTimeZone } from "../../redux/time/selectors";
import { getSelectedDateSelector } from "../../redux/date/selectors";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";

export default function SheduleDetail() {
  const { name } = useSelector(memberDataSelector);
  const selectedTime = useSelector(getSelectedTime);
  const selectedDate = useSelector(getSelectedDateSelector);
  const timeZone = useSelector(getTimeZone);
  const labelStyle = "original";

  const { parseTimezone } = useTimezoneSelect({
    labelStyle,
    allTimezones,
  });
  const parsedTimeZone = parseTimezone(timeZone);
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: timeZone,
  });

  return (
    <div className="flex flex-col justify-center items-center gap-7 p-10">
      <div className="flex flex-col items-center justify-start gap-2">
        <div className="flex gap-2.5">
          <svg width="28" height="28" className="fill-[#e9ac32]">
            <use href="/icon-sprite.svg#done"></use>
          </svg>
          <h3 className="font-inter font-semibold text-[20px] leading-[1.2] text-center text-[#f4f1eb]">
            You are scheduled
          </h3>
        </div>
        <p className="font-inter font-normal text-[16px] leading-normal text-center text-[rgba(253,252,252,0.5)]">
          A calendar invitation has been sent to your email address.
        </p>
      </div>
      <div className="border border-[rgba(253,252,252,0.25)] rounded-lg py-4 px-6 w-114.5 h-40.5">
        <h3 className="font-inter font-semibold text-[20px] leading-[1.2] text-[#f4f1eb] mb-2.5">
          Schedule eClosing
        </h3>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <svg width="20" height="20" className="stroke-2 stroke-white/50">
              <use href="/icon-sprite.svg#member"></use>
            </svg>
            <p className="font-semibold text-base leading-6 text-white/50">
              {name}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="fill-none stroke-2 stroke-white/50"
              width="20"
              height="20"
            >
              <use href="/icon-sprite.svg#calendar"></use>
            </svg>
            <p className="font-semibold text-base leading-6 text-white/50">
              {`${selectedTime}, ${formattedDate}`}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="fill-none stroke-2 stroke-white/50"
              width="20"
              height="20"
            >
              <use href="/icon-sprite.svg#earth-TimeZone"></use>
            </svg>
            <p className="font-semibold text-base leading-6 text-white/50">
              {parsedTimeZone.altName}
            </p>
          </li>

          <p></p>
        </ul>
      </div>
    </div>
  );
}
