export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-xs text-muted uppercase tracking-[0.2em] font-body">
        Scroll
      </span>
      <div className="w-5 h-8 rounded-full border border-stroke flex items-start justify-center pt-1.5 overflow-hidden">
        <div className="w-1 h-1.5 rounded-full bg-muted animate-scroll-down" />
      </div>
    </div>
  );
}
