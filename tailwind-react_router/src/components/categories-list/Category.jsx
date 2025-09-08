export const CategoryPill = ({ label, imageUrl }) => {
  return (
    <button
      className="group relative inline-flex h-16 w-[300px] items-center justify-center overflow-hidden rounded-[24px] shadow-sm ring-1 ring-black/5 transition-transform duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none"
      aria-label={label}
      type="button">
      {/* Hintergrundbild */}
      <img
        src={imageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover blur-[2px] brightness-90 group-hover:brightness-100"
        draggable={false}
      />

      {/* Leichte Verdunkelung für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10" />

      {/* Sanfter Verlauf (Vignette), damit der Text besser hervorsticht */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

      {/* Beschriftung */}
      <span className="relative z-10 select-none text-lg font-semibold tracking-wide text-white drop-shadow-md">
        {label}
      </span>
    </button>
  );
};
