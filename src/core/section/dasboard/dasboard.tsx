'use client';
import dynamic from 'next/dynamic';

import Star from '@/components/svg/dasboard/Star';
import { useState } from 'react';

const MoonDynamic = dynamic(() => import('@/components/svg/dasboard/Moon'), {
  ssr: false,
});
export default function DashboardSection() {
  const [isActive, setIsActive] = useState<number | null>(null);

  const IconUploads = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 13a1 1 0 0 0-1 1v.38l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.7l-2.48-2.48a2.85 2.85 0 0 0-3.93 0L4 12.6V7a1 1 0 0 1 1-1h7a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1M5 20a1 1 0 0 1-1-1v-3.57l2.9-2.9a.79.79 0 0 1 1.09 0l3.17 3.17l4.3 4.3Zm13-1a.9.9 0 0 1-.18.53L13.31 15l.7-.7a.77.77 0 0 1 1.1 0L18 17.21Zm4.71-14.71l-3-3a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42L18 4.41V10a1 1 0 0 0 2 0V4.41l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"
        ></path>
      </svg>
    );
  };

  const IconArrow = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
        <g fill="none">
          <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.105.074l.014.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.092l.01-.009l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M18 4.5A1.5 1.5 0 0 1 19.5 6v8a1.5 1.5 0 0 1-3 0V9.621l-9.097 9.097a1.5 1.5 0 0 1-2.12-2.122L14.377 7.5H10a1.5 1.5 0 1 1 0-3z"
          ></path>
        </g>
      </svg>
    );
  };

  return (
    <main className="w-full h-full relative z-0 ">
      <div className="flex justify-center items-center h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-4]">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold font-serif tracking-wider sm:tracking-[1rem] md:tracking-[2rem] lg:tracking-[3rem]">
            Admin
          </h1>
        </div>

        <div className="absolute inset-0 z-[-5] flex justify-center items-center transform scale-110  sm:scale-120 md:scale-135  duration-800 ease-in-out ">
          <MoonDynamic />
        </div>
        <div className="z-[-5] absolute inset-0 translate-y-1/3 flex justify-center items-center transform scale-110  duration-800 ease-in-out  sm:translate-y-[10px] lg:translate-y-[300px] ">
          <Star />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.6fr_2fr] gap-4 p-4 w-full h-full ">
          <div className="flex justify-center items-center border rounded-lg bg-[var(--shape-glass)] border-[var(--glass-stroke)] p-4  h-full">
            <div className="flex flex-col w-full justify-center h-full relative gap-16 p-2 sm:gap-16 sm:p-10 xl:p-2 ">
              {/* nantik untuk foto */}
              <div
                className={`w-full  min-h-40 bg-[var(--glass-pict)] border rounded-lg drop-shadow-xs h-full transition-transform duration-300 border-[var(--glass-stroke)] ${isActive === null ? 'scale-100 ' : 'scale-75 sm:scale-90 xl:scale-77  '} `}
              />

              {['DASHBOARD', 'EVENT', 'ACHIEVEMENTS', 'MERCHANDISE'].map((label, index) => (
                <div
                  key={label}
                  className={`group relative p-4 rounded-lg  w-full flex justify-center items-center border bg-[var(--glass)] border-[var(--glass-stroke)] shadow-md transition-transform duration-300 z-0 ${isActive !== null && index <= isActive ? '-translate-y-[80px] sm:-translate-y-[60px]' : 'translate-y-0'}`}
                  onMouseEnter={() => setIsActive(index)}
                  onMouseLeave={() => setIsActive(null)}
                >
                  <h1 className="font-bold text-[var(--glass-text)]">{label}</h1>

                  {label === 'DASHBOARD' && (
                    <div className="absolute top-full mt-2 w-4/5 bg-[var(--glass)] -translate-y-[7px] border border-[var(--glass-stroke)]  rounded-sm shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out p-2 z-[-2]">
                      <div className="flex flex-col p-2 gap-2">
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white font-semibold py-1 rounded-full text-sm shadow-inner hover:scale-105 transition">
                          Thumbnail
                        </button>
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] text-white border border-[#E19FFF] py-1 rounded-full font-semibold text-sm shadow-inner hover:scale-105 transition">
                          Gambar
                        </button>
                      </div>
                    </div>
                  )}

                  {label === 'EVENT' && (
                    <div className="absolute top-full mt-2 w-4/5 bg-[var(--glass)] -translate-y-[7px] border border-[var(--glass-stroke)] rounded-sm shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out p-2 z-2 ">
                      <div className="flex flex-col p-2 gap-2">
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white font-semibold py-1 rounded-full text-sm shadow-inner hover:scale-105 transition">
                          Thumbnail
                        </button>
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white py-1 font-semibold rounded-full text-sm shadow-inner hover:scale-105 transition">
                          Gambar
                        </button>
                      </div>
                    </div>
                  )}

                  {label === 'ACHIEVEMENTS' && (
                    <div className="absolute top-full mt-2 w-4/5 bg-[var(--glass)] -translate-y-[7px] border border-[var(--glass-stroke)] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out p-2 z-2">
                      <div className="flex flex-col p-2 gap-2">
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white py-1 rounded-full font-semibold text-sm shadow-inner hover:scale-105 transition">
                          Thumbnail
                        </button>
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white py-1 rounded-full font-semibold text-sm shadow-inner hover:scale-105 transition">
                          Gambar
                        </button>
                      </div>
                    </div>
                  )}

                  {label === 'MERCHANDISE' && (
                    <div className="absolute top-full mt-2 w-4/5 bg-[var(--glass)] -translate-y-[7px] border border-[var(--glass-stroke)] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out p-2 z-2">
                      <div className="flex flex-col p-2 gap-2">
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white py-1 rounded-full text-sm shadow-inner font-semibold hover:scale-105 transition">
                          Thumbnail
                        </button>
                        <button className="bg-gradient-to-r from-[#7300FF] via-[#803BD5] to-[#8E78A9] border border-[#E19FFF] text-white py-1 rounded-full text-sm shadow-inner font-semibold hover:scale-105 transition">
                          Gambar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center border border-[var(--glass-stroke)] rounded-lg bg-[var(--shape-glass)] ">
            <div className="grid grid-cols-1 grid-rows-[2fr_1fr] w-full h-full p-6 gap-6">
              <div className="border border-[var(--glass-stroke)] flex justify-center items-center rounded-xs relative mt-20">
                <div className="absolute -top-17 left-0 ">
                  <div className="relative ">
                    <svg
                      className="w-full h-auto "
                      viewBox="0 0 197 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 44H195C196.105 44 197 43.1046 197 42V16.1277C197 15.283 196.469 14.5294 195.674 14.2447L156.217 0.117062C156.001 0.0396004 155.773 0 155.543 0H2C0.895432 0 0 0.895432 0 2V42C0 43.1046 0.895432 44 2 44Z"
                        fill="url(#paint0_linear_419_4860)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_419_4860"
                          x1="81"
                          y1="7"
                          x2="81.5276"
                          y2="64.4997"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5033B7" />
                          <stop offset="1" stopColor="#7E73A4" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <p className="text-white font-semibold">Thumbnail</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col ">
                  <IconUploads />

                  <div className="flex justify-center items-center  p-2 border rounded-full border-[var(--slice-foreground)] ">
                    <div className=" border rounded-full bg-[var(--slice-foreground)] gap-4 p-4 flex justify-center items-center">
                      <button className="h-auto w-auto ">Uploads Gambar Disini</button>
                      <IconArrow />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center rounded-lg bg-linear-to-t from-[#4A207D] via-[#682DAF] to-[#873AE3] p-6 relative flex-col gap-4 h-full">
                <div className="w-full flex justify-start items-center">
                  <p className="font-semibold  text-4xl ">CAPTION :</p>
                </div>

                {/* Nanti Untuk Input */}
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad dolorem earum enim
                  cumque eum adipisci neque sint quis possimus cum ut vel, molestias a quos
                  consequatur voluptatibus libero, eos mollitia.
                </p>
                {/* Submit buToon */}
                <button className="absolute right-2 bottom-2 font-bold w-auto h-auto p-3 border-white  rounded-lg bg-[#E19FFF] text-[#7300FF] ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
