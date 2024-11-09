import PrayerCard2 from "./PrayerCard2";
import Sun from "./Sun";

function Main2() {
  return (
    <main className="container bg-white w-max p-5 rounded-2xl shadow-[0_5px_30px_rgb(0,0,0,0.12)]">
      <div className="flex justify-center items-center gap-3">
        <div className=" flex gap-3 flex-wrap lg:max-w-[456px] ">
          <PrayerCard2 />
          <PrayerCard2 />
          <PrayerCard2 />
          <PrayerCard2 />
          <PrayerCard2 />
          <PrayerCard2 />
        </div>

        <div className=" w-[300px]">
          <div className="flex flex-col gap-3 ">
            <div className="h-[122px] w-full bg-[#4DFFAF] rounded-xl flex flex-col justify-center items-center">
              <h2 className="font-medium">Next Prayer </h2>
              <p className="text-3xl font-medium -mt-1">06h 13min</p>
            </div>
            <div className="flex gap-3">
              <Sun reverse={false} />
              <Sun reverse={true} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main2;
