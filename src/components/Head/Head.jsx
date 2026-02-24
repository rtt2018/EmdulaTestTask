export default function Head() {
  return (
    <div className="px-[28px] py-6">
      <div className="flex flex-col items-center justify-start gap-6">
        <h3 className="font-semibold text-2xl leading-[1.25] text-[#f4f1eb]">
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
                10:00 - 10:30, Thuesday, February 12, 2026
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
                European Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
