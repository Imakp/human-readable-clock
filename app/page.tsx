'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, ClockIcon } from '@heroicons/react/solid';

const numberToWords = (num: number) => {
  const words = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six",
    "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three",
    "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty",
    "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", 
    "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", 
    "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"
  ];

  return words[num];
};

const humanizeTime = (hours: number, minutes: number, is24Hour: boolean) => {
  let displayHours = is24Hour ? hours : hours % 12 || 12;
  const nextHour = is24Hour ? (hours + 1) % 24 : (hours % 12) + 1;

  const hourWord = numberToWords(displayHours);
  const minuteWord = numberToWords(minutes);

  let timeString = '';

  if (minutes === 0) {
    timeString = `<strong>${hourWord}</strong> o'clock`;
  } else if (minutes < 30) {
    timeString = `<strong>${minuteWord}</strong> minutes past <strong>${hourWord}</strong>`;
  } else {
    timeString = `<strong>${numberToWords(60 - minutes)}</strong> minutes to <strong>${numberToWords(nextHour)}</strong>`;
  }

  return timeString;
};


export default function Home() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative p-4">
      {/* Display human-readable time with numbers as words */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-center"
        dangerouslySetInnerHTML={{ __html: humanizeTime(hours, minutes, is24Hour) }}
      />

      {/* 12/24-hour and Light/Dark mode toggle buttons */}
      <div className="absolute bottom-4 left-4 md:left-auto md:bottom-auto md:top-4 md:right-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        {/* 12/24-hour toggle button */}
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          {/* Toggle between clock icons */}
          <ClockIcon className="h-6 w-6" />
        </button>

        {/* Light/Dark mode toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none"
        >
          {/* Toggle between sun and moon icons */}
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}
