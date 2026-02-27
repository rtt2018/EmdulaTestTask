import toast from "react-hot-toast";
const notify = () => toast("Here will be the Cookie settings");

export default function CookieSettings() {
  return (
    <button
      className="font-medium text-sm leading-[1.28571] text-[#e9ac32] font-inter"
      onClick={notify}
    >
      Cookie settings
    </button>
  );
}
