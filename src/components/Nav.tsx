"use client";

import { CircleArrowRight, Moon, Settings } from "lucide-react";
import { MouseEventHandler, SetStateAction } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Nav({
  toggleDarkMode,
  onUpdateCountryData,
  countryData,
  hijriDate,
  forwardFunction,
  backwarFunction,
}: {
  toggleDarkMode: MouseEventHandler<SVGSVGElement>;
  onUpdateCountryData: (
    newData: SetStateAction<{ country: string; city: string; method: string }>
  ) => void;
  countryData: {
    country: string;
    city: string;
    method: string;
  };
  hijriDate: string;
  forwardFunction: MouseEventHandler<SVGSVGElement>;
  backwarFunction: MouseEventHandler<SVGSVGElement>;
}) {
  const [visible, setVisible] = useState("hidden");

  function handleInnerClick(event: React.MouseEvent) {
    event.stopPropagation();
  }

  function handleSectionClick() {
    setVisible(visible === "hidden" ? "flex" : "hidden");
  }

  const [localCountryData, setLocalCountryData] = useState({
    country: "Morocco",
    city: "Martil",
    method: "21",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setLocalCountryData({
      ...localCountryData,
      [name]: value,
    });
  }

  function handleSaveClick() {
    setVisible("hidden");
    onUpdateCountryData(localCountryData);
  }

  return (
    <nav className="w-full text-emerald-950 py-3 gap-5 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between font-semibold">
      <div className="flex gap-3 items-center">
        <div className="p-1 hover:bg-white/50 rounded-md transition-colors">
          <CircleArrowRight
            className="rotate-180 cursor-pointer"
            onClick={forwardFunction}
          />
        </div>
        <p className="text-center">{hijriDate}</p>
        <div className="p-1 hover:bg-white/50 rounded-md transition-colors">
          <CircleArrowRight
            className="cursor-pointer"
            onClick={backwarFunction}
          />
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <div className="p-1 hover:bg-white/50 rounded-md transition-colors">
          <Moon
            className="-rotate-90 cursor-pointer"
            onClick={toggleDarkMode}
          />
        </div>
        <div className="p-1 hover:bg-white/50 rounded-md transition-colors">
          <Settings className="cursor-pointer" onClick={handleSectionClick} />
        </div>
      </div>

      <div
        className={twMerge(
          "absolute inset-0 justify-center items-center z-10 bg-gray-800/50 h-screen w-screen",
          visible
        )}
        onClick={handleSectionClick}
      >
        <div
          className="flex font-medium flex-col gap-5 p-5 min-w-80 bg-white dark:bg-emerald-950 dark:text-emerald-100 text-emerald-950 rounded-2xl"
          onClick={handleInnerClick}
        >
          <div className="border-b-2 border-black/50 pb-3">
            <p className="text-center font-semibold text-xl">{`Selected : ${countryData.country}, ${countryData.city}`}</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="country">Country</label>
            <input
              onChange={handleChange}
              value={localCountryData.country}
              type="text"
              placeholder="Morocco"
              id="country"
              name="country"
              className="h-10 rounded-lg pl-4 bg-emerald-100 placeholder:text-black/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="city">City</label>
            <input
              onChange={handleChange}
              value={localCountryData.city}
              placeholder="Tetouan"
              type="text"
              id="city"
              name="city"
              className="h-10 rounded-lg pl-4 bg-emerald-100 placeholder:text-black/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="method">Prayer Method</label>
            <select
              onChange={handleChange}
              value={localCountryData.method}
              name="method"
              id="method"
              className="h-10 rounded-lg px-4 bg-emerald-100"
            >
              <option value="">Select Prayer Method</option>
              <option value="1">🌍 Muslim World League</option>
              <option value="2">🇺🇸 Islamic Society of North America</option>
              <option value="3">🇪🇬 Egyptian General Authority of Survey</option>
              <option value="4">🇸🇦 Umm Al-Qura University, Makkah</option>
              <option value="5">
                🇵🇰 University of Islamic Sciences, Karachi
              </option>
              <option value="6">
                🇮🇷 Institute of Geophysics, University of Tehran
              </option>
              <option value="7">
                🇮🇶 Shia Ithna-Ashari, Leva Institute, Qum
              </option>
              <option value="8">🇸🇦 Gulf Region</option>
              <option value="9">🇰🇼 Kuwait</option>
              <option value="10">🇶🇦 Qatar</option>
              <option value="11">
                🇸🇬 Majlis Ugama Islam Singapura, Singapore
              </option>
              <option value="12">
                🇫🇷 Union Organization islamic de France
              </option>
              <option value="13">🇹🇷 Diyanet İşleri Başkanlığı, Turkey</option>
              <option value="14">
                🇷🇺 Spiritual Administration of Muslims of Russia
              </option>
              <option value="15">🌒 Moonsighting Committee</option>
              <option value="16">🇦🇪 Dubai, UAE</option>
              <option value="17">
                🇲🇾 Jabatan Kemajuan Islam Malaysia (JAKIM)
              </option>
              <option value="18">🇹🇳 Tunisia</option>
              <option value="19">🇩🇿 Algeria</option>
              <option value="20">
                🇮🇩 Kementerian Agama Republik Indonesia
              </option>
              <option value="21">🇲🇦 Morocco</option>
              <option value="22">
                🇵🇹 Comunidade Islâmica de Lisboa (Portugal)
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2 border-t-2 border-black/50 pt-3">
            <label htmlFor="theme">Theme</label>
            <div id="theme" className="flex flex-wrap gap-4">
              <div className="size-10 rounded-full cursor-pointer bg-sunset"></div>
              <div className="size-10 rounded-full cursor-pointer bg-green"></div>
              <div className="size-10 rounded-full cursor-pointer bg-peach"></div>
              <div className="size-10 rounded-full cursor-pointer bg-blue"></div>
            </div>
          </div>

          <button
            onClick={handleSaveClick}
            type="submit"
            className="bg-emerald-400 p-2 rounded-xl hover:bg-emerald-300 transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </nav>
  );
}