export default function Calendar() {
  return (
    <div className="flex flex-col items-center justify-start gap-8 border-t border-white/25 p-7 w-[700px]">
      <div className="flex flex-col items-start justify-start gap-6 w-[344px]">
        <h4>Select a Date & Time</h4>
        <div>calendar</div>
        <div>TimeZone</div>
      </div>
      <div>Cookie settings</div>
    </div>
  );
}
