import { useState } from "react";
import CookieSettings from "../CookieSettings/CookieSettings";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setMemberDataAction } from "../../redux/meetMember/slice";
import ical from "ical-generator";
import { useSelector } from "react-redux";
import { getSelectedTime, getTimeZone } from "../../redux/time/selectors";
import { getSelectedDateSelector } from "../../redux/date/selectors";

const schema = yup.object().shape({
  name: yup.string().required("Name required!").min(3, "Min 3 symbol"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email is required!"),
  guest: yup.string(),
  comments: yup.string(),
});

function generateICS({
  title,
  date,
  startTime,
  endTime,
  timeZone,
  organizerName,
  organizerEmail,
  guestEmails,
  comment,
}) {
  const start = new Date(`${date}T${startTime}:00`);
  const end = new Date(`${date}T${endTime}:00`);

  const calendar = ical({
    name: "Schedule eClosing",
    timeZone,
  });

  const event = calendar.createEvent({
    start,
    end,
    summary: title,
    description: comment,
    organizer: {
      name: organizerName,
      email: organizerEmail,
    },
  });

  if (guestEmails.length > 0) {
    guestEmails.forEach((email) => {
      event.createAttendee({
        email,
        role: "REQ-PARTICIPANT",
        rsvp: true,
      });
    });
  }

  const blob = new Blob([calendar.toString()], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "event.ics";
  link.click();

  URL.revokeObjectURL(url);
  return calendar.toString();
}

export default function FormDetails() {
  const dispatch = useDispatch();
  const selectedTime = useSelector(getSelectedTime);
  const selectedDate = useSelector(getSelectedDateSelector);
  const timeZone = useSelector(getTimeZone);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isGuestInputVisible, setIsGuestInputVisible] = useState(false);

  const onSubmit = (data) => {
    const sData = { ...data };
    dispatch(setMemberDataAction(data));
    reset();
    setIsGuestInputVisible(false);
    generateICS({
      title: "Schedule eClosing",
      date: selectedDate.split("T")[0],
      startTime: selectedTime.split("-")[0].trim(),
      endTime: selectedTime.split("-")[1].trim(),
      timeZone,
      organizerName: sData.name,
      organizerEmail: sData.email,
      guestEmails: sData.guest ? sData.guest.split(" ") : "",
      comment: sData?.comment || "",
    });
  };

  return (
    <div className="border-t border-[rgba(253,252,252,0.25)] p-7 flex flex-col items-center justify-start gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-start gap-6"
      >
        <h3 className="font-inter font-semibold text-[20px] leading-[1.2] text-[#f4f1eb]">
          Enter details
        </h3>
        <label
          htmlFor="name"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Name <span className="text-[#d18e1b]">*</span>
          <input
            type="text"
            {...register("name")}
            id="name"
            className="mt-1 flex flex-row items-center justify-start gap-0
              border border-[rgba(253,252,252,0.25)] rounded-[10px]
              py-2 px-3 w-87.5   h-10 bg-[rgba(12,6,20,0.25)]"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </label>
        <label
          htmlFor="email"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Email <span className="text-[#d18e1b]">*</span>
          <input
            type="email"
            {...register("email")}
            name="email"
            id="memberMail"
            className="mt-1 flex flex-row items-center justify-start gap-0
              border border-[rgba(253,252,252,0.25)] rounded-[10px]
              py-2 px-3 w-87.5 h-10 bg-[rgba(12,6,20,0.25)]"
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </label>
        {isGuestInputVisible && (
          <label
            htmlFor="guest"
            className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
          >
            Guest Email(s)
            <input
              type="text"
              {...register("guest")}
              name="guest"
              id="guestName"
              className="mt-1 flex flex-row items-center justify-start gap-0
              border border-[rgba(253,252,252,0.25)] rounded-[10px]
              py-2 px-3 w-87.5 h-10 bg-[rgba(12,6,20,0.25)]"
            />
          </label>
        )}
        {!isGuestInputVisible && (
          <button
            type="button"
            className="font-inter font-medium text-[14px] leading-[1.28571] text-[#e9ac32]
              flex flex-row items-center justify-center gap-2 border-2 border-[#e9ac32] rounded-[100px]
              py-3 px-4.5 w-28.75 h-10.5 transition-colors duration-200 hover:text-[#d18e1b] hover:border-[#d18e1b]
          active:text-[#a86415] active:border-[#a86415]"
            onClick={() => {
              setIsGuestInputVisible(true);
            }}
          >
            Add Guests
          </button>
        )}
        <label
          htmlFor="comments"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Please share anything that will help prepare our meeting
          <textarea
            name="comments"
            {...register("comments")}
            id="memberComments"
            className="mt-1 resize-none flex flex-row items-center justify-start gap-0
              border border-[rgba(253,252,252,0.25)] rounded-[10px]
              py-2 px-3 w-87.5 h-20 bg-[rgba(12,6,20,0.25)]"
          ></textarea>
        </label>
        <button
          type="submit"
          className="
            font-inter font-medium text-[14px] leading-[1.28571] text-[#0c0614]
            flex flex-row items-center justify-center gap-2
            rounded-[100px] py-3 px-4
            w-35 h-10.5
          bg-[#e9ac32] hover:bg-[#d18e1b]
          active:bg-[#a86415] active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)]
          transition-all duration-200 ease-in-out"
        >
          Schedule Event
        </button>
      </form>
      <CookieSettings />
    </div>
  );
}
