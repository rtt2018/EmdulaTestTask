export default function FormDetails() {
  return (
    <div className="">
      <form
        action=""
        method="post"
        className="flex flex-col items-start justify-start gap-6"
      >
        <h3>Enter details</h3>
        <label
          htmlFor="nameInput"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Name
          <input
            type="text"
            name="nameInput"
            id="nameMember"
            className=" flex flex-row items-center justify-start gap-0
  border border-[rgba(253,252,252,0.25)] rounded-[10px]
  py-2 px-3
  w-[350px] h-[40px]
  bg-[rgba(12,6,20,0.25)]"
          />
        </label>
        <label
          htmlFor=""
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Email
          <input
            type="email"
            name="mailInput"
            id="memberMail"
            className=" flex flex-row items-center justify-start gap-0
  border border-[rgba(253,252,252,0.25)] rounded-[10px]
  py-2 px-3
  w-[350px] h-[40px]
  bg-[rgba(12,6,20,0.25)]"
          />
        </label>
        <label
          htmlFor="guestInput"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Guest Email(s)
          <input
            type="text"
            name="guestInput"
            id="guestName"
            className=" flex flex-row items-center justify-start gap-0
  border border-[rgba(253,252,252,0.25)] rounded-[10px]
  py-2 px-3
  w-[350px] h-[40px]
  bg-[rgba(12,6,20,0.25)]"
          />
        </label>
        <button type="button">Add Guests</button>
        <label
          htmlFor="comments"
          className="font-sans font-normal text-[14px] leading-[1.42857] text-[#f4f1eb]"
        >
          Please share anything that will help prepare our meeting
          <textarea
            name="comments"
            id="memberComments"
            className=" flex flex-row items-center justify-start gap-0
  border border-[rgba(253,252,252,0.25)] rounded-[10px]
  py-2 px-3
  w-[350px] h-[80px]
  bg-[rgba(12,6,20,0.25)]"
          ></textarea>
        </label>
        <button
          type="submit"
          className="font-inter font-medium text-[14px] leading-[1.28571] text-[#0c0614]  flex flex-row items-center justify-center gap-2
    rounded-[100px] py-3 px-4
    w-[140px] h-[42px]
    bg-[#e9ac32] 
    hover:bg-[#d18e1b]
    active:bg-[#a86415] active:shadow-[inset_5px_6px_4px_rgba(12,17,31,0.3)]"
        >
          Schedule Event
        </button>
      </form>
    </div>
  );
}
