import { ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
export default function Sun({ reverse }: { reverse: boolean }) {
  return (
    <div className="flex gap-1 flex-grow flex-[1_0_30%] flex-col justify-center border border-[#00FF8C] text-[#007540] bg-[#F2FFF9] rounded-xl py-1 pl-4 min-w-36">
      <div>
        <h2 className="text-lg font-medium">Fajr</h2>
        <p className="text-3xl font-medium -mt-2">06:13</p>
      </div>
      <div className="w-[80%] bg-[#00FF8C]/50 h-[1px]"></div>

      <div className="flex justify-center  rotate-180 overflow-hidden  h-[52px] -mb-1 -ml-4">
        <div className="relative -translate-y-1/2 size-16 border border-[#00FF8C] rounded-full bg-[#4DFFAF] flex justify-center shadow-[0_0px_30px_rgb(0,255,140,0.6)]">
          <ArrowUp
            className={twMerge(
              "absolute bottom-2 text-white size-5",
              reverse ? "" : "rotate-180"
            )}
          />
        </div>
      </div>
    </div>
  );
}
