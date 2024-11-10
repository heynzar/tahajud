"use client";

import axios from "axios";
import { useState, useEffect, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

import Nav from "./Nav";
import PrayerCard2 from "./PrayerCard2";
import Sun from "./Sun";

// Interfaces
interface CountryData {
  country: string;
  city: string;
  method: string;
  theme: string;
}

interface PrayerTime {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  tahjud: string;
  sunset: string;
  sunrise: string;
}

interface TimeState {
  hour: number;
  minutes: number;
}

function Main2() {
  // State hooks
  const [dark, setDark] = useState<boolean>(false);
  const [countryData, setCountryData] = useState<CountryData>({
    country: "Morocco",
    city: "Martil",
    method: "21",
    theme: "green",
  });
  const [date, setDate] = useState<Date>(new Date());
  const [hijriDate, SetHijriDate] = useState("Al Ahad 2 Jumādá al-ūlá 1446");
  const [prayerTimeDiffer, setPrayerTimeDiffer] = useState({
    tf: "06:19",
    fd: "06:19",
    da: "06:19",
    am: "06:19",
    mi: "06:19",
    if: "06:19",
  });
  const [prayerList, setPrayerList] = useState<number[][]>([]);
  const [prayerTime, setPrayerTime] = useState<PrayerTime>({
    fajr: "4:24",
    dhuhr: "13:33",
    asr: "17:06",
    maghrib: "20:41",
    isha: "22:14",
    tahjud: "03:05",
    sunset: "20:35",
    sunrise: "06:19",
  });
  const [result, setResult] = useState<string>("1h 20min");
  const [time, setTime] = useState<TimeState>({
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
  });

  // Derived constants
  const paryerlist = prayerList.map((p) => Number(p[0]) * 60 + Number(p[1]));
  const thisHour = time.hour * 60 + time.minutes;

  // Handlers
  const toggleDarkMode = () => setDark((prev) => !prev);

  const handleNextPrayer = () => {
    for (let index = 0; index < paryerlist.length; index++) {
      if (paryerlist[index] > thisHour) {
        const minutes = paryerlist[index] - thisHour;
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        setResult(`${hours}h ${remainingMinutes}min`);
        break;
      }
    }
  };

  const handleUpdateCountryData = (newData: SetStateAction<CountryData>) => {
    setCountryData(newData);
  };

  const addDay = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const subtractDay = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  function HandleInterval(time1: string, time2: string) {
    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);

    let difference = hours1 * 60 + minutes1 - (hours2 * 60 + minutes2);

    if (difference < 0) difference += 24 * 60;

    const resultHours = String(Math.floor(difference / 60)).padStart(2, "0");
    const resultMinutes = String(difference % 60).padStart(2, "0");

    return `${resultHours}:${resultMinutes}`;
  }

  // Effects
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextPrayer();
      const now = new Date();
      setTime({
        hour: now.getHours(),
        minutes: now.getMinutes(),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [paryerlist, thisHour]);

  useEffect(() => {
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByAddress/${formatDate(
          date
        )}?address=${countryData.city},${countryData.country}&method=${Number(
          countryData.method
        )}`
      )
      .then((response) => {
        const timings = response.data.data.timings;
        const updatedPrayerTime: PrayerTime = {
          fajr: timings.Fajr,
          dhuhr: timings.Dhuhr,
          asr: timings.Asr,
          maghrib: timings.Maghrib,
          isha: timings.Isha,
          tahjud: timings.Lastthird,
          sunset: timings.Sunset,
          sunrise: timings.Sunrise,
        };

        const updatedprayerTimeDiffer = {
          tf: HandleInterval(updatedPrayerTime.fajr, updatedPrayerTime.tahjud),
          fd: HandleInterval(updatedPrayerTime.dhuhr, updatedPrayerTime.fajr),
          da: HandleInterval(updatedPrayerTime.asr, updatedPrayerTime.dhuhr),
          am: HandleInterval(updatedPrayerTime.maghrib, updatedPrayerTime.asr),
          mi: HandleInterval(updatedPrayerTime.isha, updatedPrayerTime.maghrib),
          if: HandleInterval(updatedPrayerTime.fajr, updatedPrayerTime.isha),
        };
        setPrayerTimeDiffer(updatedprayerTimeDiffer);

        const hijri = `${response.data.data.date.hijri.weekday.en} ${
          Number(response.data.data.date.hijri.day) + 1
        } ${response.data.data.date.hijri.month.en} ${
          response.data.data.date.hijri.year
        }`;

        SetHijriDate(hijri);

        const prayerTimesArray = [
          timings.Fajr.split(":"),
          timings.Dhuhr.split(":"),
          timings.Asr.split(":"),
          timings.Maghrib.split(":"),
          timings.Isha.split(":"),
        ].map((time) => [Number(time[0]), Number(time[1])]);

        setPrayerList(prayerTimesArray);
        setPrayerTime(updatedPrayerTime);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countryData, date]);

  return (
    <div className={twMerge("big-boy p-4", `bg-${countryData.theme}`)}>
      <main
        className={twMerge(
          "lg:-mt-20 container flex flex-col gap-3 md:max-w-[640px] lg:max-w-[810px] 2xl:scale-150",
          dark ? "dark" : ""
        )}
      >
        <Nav
          hijriDate={hijriDate}
          forwardFunction={subtractDay}
          backwarFunction={addDay}
          toggleDarkMode={toggleDarkMode}
          onUpdateCountryData={handleUpdateCountryData}
          countryData={countryData}
        />
        <div
          className={twMerge(
            "transition-colors p-4 rounded-3xl shadow-[0_5px_30px_rgb(0,0,0,0.12)]",
            `${countryData.theme}-theme-main`
          )}
        >
          <div className="flex flex-col lg:flex-row  justify-center items-center gap-3">
            <div
              className={twMerge(
                "h-[122px] lg:hidden w-full  rounded-xl flex flex-col justify-center items-center",
                `${countryData.theme}-theme-next`
              )}
            >
              <h2 className="font-medium ">Next Prayer </h2>
              <p className="text-3xl font-medium -mt-1">{result}</p>
            </div>

            {/* Prayer Cards */}
            <div className="flex gap-3 flex-wrap lg:max-w-[456px]">
              <PrayerCard2
                theme={countryData.theme}
                ParyerTime={prayerTime.tahjud}
                PrayerName="Tahajud"
                Prayerbetween="Tahajud-Fajr"
                PrayerbetweenTime={prayerTimeDiffer.tf}
              />
              <PrayerCard2
                theme={countryData.theme}
                ParyerTime={prayerTime.fajr}
                PrayerName="Fajr"
                Prayerbetween="Fajr-Duhur"
                PrayerbetweenTime={prayerTimeDiffer.fd}
              />
              <PrayerCard2
                theme={countryData.theme}
                ParyerTime={prayerTime.dhuhr}
                PrayerName="Dhuhr"
                Prayerbetween="Dhuhr-Asr"
                PrayerbetweenTime={prayerTimeDiffer.da}
              />
              <PrayerCard2
                theme={countryData.theme}
                ParyerTime={prayerTime.asr}
                PrayerName="Asr"
                Prayerbetween="Asr-Maghreb"
                PrayerbetweenTime={prayerTimeDiffer.am}
              />
              <PrayerCard2
                theme={countryData.theme}
                ParyerTime={prayerTime.maghrib}
                PrayerName="Maghreb"
                Prayerbetween="Maghreb-Isha"
                PrayerbetweenTime={prayerTimeDiffer.mi}
              />
              <PrayerCard2
                theme={countryData.theme}
                ParyerTime={prayerTime.isha}
                PrayerName="Isha"
                Prayerbetween="Isha-Fajr"
                PrayerbetweenTime={prayerTimeDiffer.if}
              />
            </div>

            {/* Desktop-only next prayer display & sunrise/sunset */}
            <div className="w-full lg:w-[300px]">
              <div className="flex flex-col gap-3">
                <div
                  className={twMerge(
                    "h-[122px] hidden w-full  rounded-xl lg:flex flex-col justify-center items-center",
                    `${countryData.theme}-theme-next`
                  )}
                >
                  <h2 className="font-medium">Next Prayer </h2>
                  <p className="text-3xl font-medium -mt-1">{result}</p>
                </div>
                <div className="flex gap-3 flex-grow flex-wrap">
                  <Sun
                    theme={countryData.theme}
                    time={prayerTime.sunrise}
                    name="Sunrise"
                    reverse={false}
                  />
                  <Sun
                    theme={countryData.theme}
                    time={prayerTime.sunset}
                    name="Sunset"
                    reverse={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main2;
