import Head from "../Head/Head";
import Calendar from "../Calendar/Calendar";
import TimeSelection from "../TimeSelection/TimeSelection";
import FormDetails from "../FormDetails/FormDetails";
import { useSelector } from "react-redux";
import { getIsSlectedDateSelector } from "../../redux/date/selectors";
import { getIsTimeSelected } from "../../redux/time/selectors";
import { Toaster } from "react-hot-toast";
import { selectIsSheduleCreated } from "../../redux/meetMember/selectors";
import SheduleDetail from "../SheduleDetail/SheduleDetail";

export default function Shedule() {
  const isDateSelected = useSelector(getIsSlectedDateSelector);
  const isTimeSelectionDone = useSelector(getIsTimeSelected);
  const isSheduleCreated = useSelector(selectIsSheduleCreated);
  return (
    <div className="bg-[#17121d] border border-[rgba(253,252,252,0.25)] rounded-2xl w-175">
      {!isSheduleCreated && <Head />}
      {!isTimeSelectionDone && (
        <div className="flex p-7 border-t border-white/25 gap-2 justify-center">
          <Calendar />
          {isDateSelected && <TimeSelection />}
        </div>
      )}
      {isTimeSelectionDone && !isSheduleCreated && <FormDetails />}
      {isSheduleCreated && <SheduleDetail />}
      <Toaster />
    </div>
  );
}
