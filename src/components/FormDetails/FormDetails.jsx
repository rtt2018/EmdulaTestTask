import { useState } from "react";

export default function FormDetails() {
  const [isGuestInputVisible, setIsGuestInputVisible] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const { nameInput, mailInput, guestInput, comments } = form.elements;

    form.reset();
  };
  return (
    <div className="border-t border-[rgba(253,252,252,0.25)] p-7 flex flex-col items-center justify-start gap-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-start gap-6"
      >
        <h3 className="font-inter font-semibold text-[20px] leading-[1.2] text-[#f4f1eb]">
          Enter details
        </h3>
        <label
          htmlFor="nameInput"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Name <span className="text-[#d18e1b]">*</span>
          <input
            type="text"
            name="nameInput"
            id="nameMember"
            className="mt-1 flex flex-row items-center justify-start gap-0
              border border-[rgba(253,252,252,0.25)] rounded-[10px]
              py-2 px-3 w-87.5   h-10 bg-[rgba(12,6,20,0.25)]"
          />
        </label>
        <label
          htmlFor=""
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Email <span className="text-[#d18e1b]">*</span>
          <input
            type="email"
            name="mailInput"
            id="memberMail"
            className="mt-1 flex flex-row items-center justify-start gap-0
              border border-[rgba(253,252,252,0.25)] rounded-[10px]
              py-2 px-3 w-87.5 h-10 bg-[rgba(12,6,20,0.25)]"
          />
        </label>
        {isGuestInputVisible && (
          <label
            htmlFor="guestInput"
            className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
          >
            Guest Email(s)
            <input
              type="text"
              name="guestInput"
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
    </div>
  );
}
