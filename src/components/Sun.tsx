import { ArrowUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
export default function Sun({
  reverse,
  name,
  time,
  theme,
}: {
  reverse: boolean;
  name: string;
  time: string;
  theme: string;
}) {
  return (
    <div
      className={twMerge(
        "flex gap-1 flex-grow flex-[1_0_30%] flex-col justify-center border transition-colors  rounded-xl py-1 pl-4 min-w-32",
        `${theme}-theme-card`
      )}
    >
      <div>
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-3xl font-medium -mt-2">{time}</p>
      </div>
      <div className="w-[80%] bg-[#ccc]/50 h-[1.5px]"></div>

      <div className="flex justify-center  rotate-180 overflow-hidden  h-[52px] -mb-1 -ml-4">
        <div
          className={twMerge(
            "relative hover:-translate-y-[30%] transition-transform  -translate-y-1/2 size-16 rounded-full  flex justify-center ",
            reverse ? "hover:-translate-y-[60%]" : "hover:-translate-y-[40%]",
            `${theme}-theme-circle`
          )}
        >
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
