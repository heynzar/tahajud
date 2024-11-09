import PrayerCard from "./PrayerCard";

function Main() {
  return (
    <main className="container bg-white w-min px-5 pt-5 rounded-2xl shadow-[0_5px_30px_rgb(0,0,0,0.12)]">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className=" flex gap-3">
          <PrayerCard />
          <PrayerCard />
          <PrayerCard />
          <PrayerCard />
          <PrayerCard />
        </div>

        <div>
          <div className="relative rotate-180 overflow-hidden h-28 ">
            <div className=" -translate-y-3/4 size-96 border border-[#00FF8C] rounded-full bg-[#4DFFAF] flex justify-center">
              <div className="absolute rotate-180 bottom-5 gap-1 flex flex-col items-center">
                <h2 className="font-medium">Next Prayer</h2>
                <p className="text-3xl font-medium -mt-2">02h 13min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
