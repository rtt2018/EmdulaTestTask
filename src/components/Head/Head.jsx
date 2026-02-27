import { useSelector } from "react-redux";
import {
  getIsTimeSelected,
  getSelectedTime,
  getTimeZone,
} from "../../redux/time/selectors";
import { getSelectedDateSelector } from "../../redux/date/selectors";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";

export default function Head() {
  const isTimeSelectionDone = useSelector(getIsTimeSelected);
  const selectedTimeRange = useSelector(getSelectedTime);
  const timeZone = useSelector(getTimeZone);
  const selectedDate = useSelector(getSelectedDateSelector);
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
    <div className="px-7 py-6">
      <div className="flex flex-col items-center justify-start gap-6">
        <h3 className="font-semibold text-2xl The class leading-tight text-[#f4f1eb]">
          Сonsultation
        </h3>
        <div className="flex flex-col items-start justify-start gap-6">
          <div className="flex flex-wrap items-start justify-start flex-row gap-4">
            <div className="flex items-center justify-start gap-2">
              <svg
                className="fill-none stroke-2 stroke-white/50"
                width="20"
                height="20"
              >
                <use href="/icon-sprite.svg#clock"></use>
              </svg>
              <p className="font-semibold text-base leading-6 text-white/50">
                30 min
              </p>
            </div>
            <div className="flex items-center justify-start gap-2">
              <svg
                className="fill-none stroke-2 stroke-white/50"
                width="20"
                height="20"
              >
                <use href="/icon-sprite.svg#camera"></use>
              </svg>
              <p className="font-semibold text-base leading-6 text-white/50">
                Web conferencing details provided upon confirmation.
              </p>
            </div>
          </div>
          {isTimeSelectionDone && (
            <div className="flex flex-wrap items-start justify-start flex-row gap-4">
              <div className="flex items-center justify-start gap-2">
                <svg
                  className="fill-none stroke-2 stroke-white/50"
                  width="20"
                  height="20"
                >
                  <use href="/icon-sprite.svg#calendar"></use>
                </svg>
                <p className="font-semibold text-base leading-6 text-white/50">
                  {`${selectedTimeRange}, ${formattedDate}`}
                </p>
              </div>
              <div className="flex items-center justify-start gap-2">
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
