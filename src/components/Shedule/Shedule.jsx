import Head from "../Head/Head";
import Calendar from "../Calendar/Calendar";
import TimeSelection from "../TimeSelection/TimeSelection";
import FormDetails from "../FormDetails/FormDetails";
import { useSelector } from "react-redux";
import { getIsSlectedDateSelector } from "../../redux/date/selectors";
import { getIsTimeSelected } from "../../redux/time/selectors";

export default function Shedule() {
  const isDateSelected = useSelector(getIsSlectedDateSelector);
  const isTimeSelectionDone = useSelector(getIsTimeSelected);

  return (
    <div className="bg-[#17121d] border border-[rgba(253,252,252,0.25)] rounded-2xl w-175">
      <Head />
      {!isTimeSelectionDone && (
        <div className="flex p-7 border-t border-white/25 gap-2 justify-center">
          <Calendar />
          {isDateSelected && <TimeSelection />}
        </div>
      )}
      {isTimeSelectionDone && <FormDetails />}
    </div>
  );
}
