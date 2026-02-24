import Head from "../Head/Head";
import Calendar from "../Calendar/Calendar";
import TimeSelection from "../TimeSelection/TimeSelection";
import FormDetails from "../FormDetails/FormDetails";
export default function Shedule() {
  return (
    <div className="bg-[#17121d] border border-[rgba(253,252,252,0.25)] rounded-2xl w-[700px]">
      <Head />
      <Calendar />
      <TimeSelection />
      <FormDetails />
    </div>
  );
}
