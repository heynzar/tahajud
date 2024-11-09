import { ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface SunProps {
  reverse: boolean;
  name: string;
  time: string;
}

export default function Sun({ reverse, name, time }: SunProps) {
  return (
    <div className="flex flex-col gap-1 flex-grow flex-[1_0_30%] justify-center border border-emerald-500 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 bg-[#F2FFF9] dark:bg-emerald-800 rounded-xl py-1 pl-4 min-w-32 transition-colors">
      {/* Display name and time */}
      <div>
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-3xl font-medium -mt-2">{time}</p>
      </div>

      {/* Divider line */}
      <div className="w-[80%] h-[1px] bg-[#00FF8C]/50"></div>

      {/* Animated icon */}
      <div className="flex justify-center h-[52px] -mb-1 -ml-4 rotate-180 overflow-hidden">
        <div
          className={twMerge(
            "relative border border-[#00FF8C] rounded-full bg-[#4DFFAF] flex justify-center shadow-[0_0px_30px_rgb(0,255,140,0.6)] hover:translate-y-0 transition-transform",
            reverse ? "hover:-translate-y-[60%]" : "hover:-translate-y-[40%]"
          )}
          style={{
            transform: "translateY(-50%)",
            height: "4rem",
            width: "4rem",
          }}
        >
          <ArrowUp
            className={twMerge(
              "absolute bottom-2 text-white",
              reverse ? "" : "rotate-180"
            )}
            style={{ fontSize: "1.25rem" }}
          />
        </div>
      </div>
    </div>
  );
}
