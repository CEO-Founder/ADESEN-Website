export function StatCard({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center text-white">
      <span className="text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
        {value}
      </span>
      <span className="text-sm font-medium sm:text-base">{label}</span>
      {detail ? (
        <span className="text-xs text-white/70">{detail}</span>
      ) : null}
    </div>
  );
}
