export default function PrayerCard() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-[#007540]">
      <div className="border border-[#00FF8C] bg-[#F2FFF9] rounded-xl flex flex-col py-1 pl-4 min-w-36">
        <h2 className="text-lg font-medium">Fajr</h2>
        <p className="text-3xl font-medium">06:13</p>
      </div>
      <div className="border border-[#00FF8C] bg-[#F2FFF9] rounded-xl flex flex-col py-0.5 pl-4 min-w-36">
        <h2 className="font-medium">Fajr-Asr</h2>
        <p className="text-2xl font-medium -mt-2">06:13</p>
      </div>
    </div>
  );
}
