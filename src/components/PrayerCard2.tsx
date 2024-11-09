export default function PrayerCard2({
  PrayerName,
  ParyerTime,
  Prayerbetween,
  PrayerbetweenTime,
}: {
  PrayerName: string;
  ParyerTime: string;
  Prayerbetween: string;
  PrayerbetweenTime: string;
}) {
  return (
    <div className="flex gap-1 flex-grow flex-[1_0_30%] flex-col justify-center border border-emerald-500 dark:border-emerald-700 text-emerald-950 transition-colors dark:text-emerald-100 bg-[#F2FFF9] dark:bg-emerald-800  rounded-xl py-1 pl-4 min-w-32">
      <div>
        <h2 className="text-lg font-medium ">{PrayerName}</h2>
        <p className="text-3xl font-medium -mt-2">{ParyerTime}</p>
      </div>
      <div className="w-[80%] bg-[#00FF8C]/50 h-[1px]"></div>
      <div>
        <h2 className="font-medium text-sm ">{Prayerbetween}</h2>
        <p className="text-2xl font-medium -mt-1">{PrayerbetweenTime}</p>
      </div>
    </div>
  );
}
