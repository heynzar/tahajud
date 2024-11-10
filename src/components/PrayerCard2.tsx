import { twMerge } from "tailwind-merge";

export default function PrayerCard2({
  PrayerName,
  ParyerTime,
  Prayerbetween,
  PrayerbetweenTime,
  theme,
}: {
  PrayerName: string;
  ParyerTime: string;
  Prayerbetween: string;
  PrayerbetweenTime: string;
  theme: string;
}) {
  return (
    <div
      className={twMerge(
        "flex gap-1 flex-grow flex-[1_0_30%] flex-col justify-center border  rounded-xl py-1 pl-4 min-w-32 hover:scale-105 transition-all",
        `${theme}-theme-card`
      )}
    >
      <div>
        <h2 className="text-lg font-medium ">{PrayerName}</h2>
        <p className="text-3xl font-medium -mt-2">{ParyerTime}</p>
      </div>
      <div className="w-[80%] bg-[#ccc]/50 h-[1px]"></div>
      <div>
        <h3 className="font-medium text-sm ">{Prayerbetween}</h3>
        <p className="text-2xl font-medium -mt-1">{PrayerbetweenTime}</p>
      </div>
    </div>
  );
}
