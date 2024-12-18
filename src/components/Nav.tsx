"use client";

import { CircleArrowRight, Moon, Settings } from "lucide-react";
import { MouseEventHandler, SetStateAction, useState, useEffect } from "react";
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
    newData: SetStateAction<{
      country: string;
      city: string;
      method: string;
      theme: string;
    }>
  ) => void;
  countryData: {
    country: string;
    city: string;
    method: string;
    theme: string;
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

  const [localCountryData, setLocalCountryData] = useState(countryData);

  // Update localCountryData whenever countryData changes
  useEffect(() => {
    setLocalCountryData(countryData);
  }, [countryData]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setLocalCountryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSaveClick(event: React.MouseEvent) {
    event.preventDefault(); // Prevent form submission
    setVisible("hidden");
    onUpdateCountryData(localCountryData);
  }

  return (
    <nav
      className={twMerge(
        "w-full  py-3 gap-5 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-between font-semibold",
        countryData.theme === "solid" ? "text-gray-100" : "text-gray-950"
      )}
    >
      <div className="flex gap-3 items-center ">
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
          "absolute body-settings px-3 2xl:w-full 2xl:-translate-y-1/3 inset-0 justify-center items-center z-10 backdrop-blur-[2px] bg-gray-800/70 w-screen",
          visible
        )}
        onClick={handleSectionClick}
      >
        <form
          className={twMerge(
            "flex font-medium flex-col gap-5 p-5 min-w-80  rounded-2xl",
            `${countryData.theme}-theme-set`
          )}
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
              className="h-10 rounded-lg pl-4 bg-white/80 dark:dark:bg-neutral-900 placeholder:text-black/50"
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
              className="h-10 rounded-lg pl-4 bg-white/80 dark:dark:bg-neutral-900 placeholder:text-black/50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="method">Prayer Method</label>
            <select
              onChange={handleChange}
              value={localCountryData.method}
              name="method"
              id="method"
              className="h-10 rounded-lg px-4 bg-white/80 dark:bg-neutral-900 "
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

          <fieldset className="flex justify-center gap-0 md:gap-2 border-t-2 border-black/50 pt-3">
            <legend className="visually-hidden">Pick a Theme</legend>

            <label htmlFor="green" className="visually-hidden">
              Green
            </label>
            <input
              type="radio"
              name="theme"
              id="green"
              value="green"
              className="bg-green"
              onChange={handleChange}
              checked={localCountryData.theme === "green"}
            />

            <label htmlFor="peach" className="visually-hidden">
              Pink theme
            </label>
            <input
              type="radio"
              id="peach"
              name="theme"
              value="peach"
              className="bg-peach"
              onChange={handleChange}
              checked={localCountryData.theme === "peach"}
            />

            <label htmlFor="blue" className="visually-hidden">
              Blue theme
            </label>
            <input
              type="radio"
              id="blue"
              name="theme"
              value="blue"
              className="bg-blue"
              onChange={handleChange}
              checked={localCountryData.theme === "blue"}
            />

            <label htmlFor="sunset" className="visually-hidden">
              Green theme
            </label>
            <input
              type="radio"
              id="sunset"
              name="theme"
              value="sunset"
              className="bg-sunset"
              onChange={handleChange}
              checked={localCountryData.theme === "sunset"}
            />

            <label htmlFor="solid" className="visually-hidden">
              Solid dark theme
            </label>
            <input
              type="radio"
              id="solid"
              name="theme"
              value="solid"
              className="bg-[#171717]"
              onChange={handleChange}
              checked={localCountryData.theme === "solid"}
            />
          </fieldset>

          <button
            onClick={handleSaveClick}
            type="button" // Changed to type "button" to prevent form submission
            className={twMerge(
              " p-2 rounded-xl  transition-colors",
              `${countryData.theme}-theme-btn`
            )}
          >
            Save
          </button>
        </form>
      </div>
    </nav>
  );
}
