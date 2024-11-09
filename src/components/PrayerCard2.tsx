export default function PrayerCard2() {
  return (
    <div className="flex gap-1 flex-grow flex-[1_0_30%] flex-col justify-center border border-[#00FF8C] text-[#007540] bg-[#F2FFF9] rounded-xl py-1 pl-4 min-w-36">
      <div>
        <h2 className="text-lg font-medium">Fajr</h2>
        <p className="text-3xl font-medium -mt-2">06:13</p>
      </div>
      <div className="w-[80%] bg-[#00FF8C]/50 h-[1px]"></div>
      <div>
        <h2 className="font-medium">Fajr-Asr</h2>
        <p className="text-2xl font-medium -mt-2">06:13</p>
      </div>
    </div>
  );
}
