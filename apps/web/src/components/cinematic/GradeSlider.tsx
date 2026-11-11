"use client";

import { useState } from "react";

export function GradeSlider() {
  const [value, setValue] = useState(50);

  const finalImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyyZPBeWH8eaY1P0so5yyfaqwQgAWKp7vQ7Lwt/9h5VRkk24FJDfUpynLOBb0HBdzTRAZnvnX9pOblZyw-vNCBx3mhhYawi6s2KNdA3oUgopwopbIVuoUaE1Q6AhFrw22W_IJlwBaVyUST67bViPwulpswITl_rsvvuMBA3RHJf79FvBAyzjOpHpI8S_ebLnbwd9rjfFpiUfhc7iZpu5mr3QKZi01pdlEMxYtWb1o";
  const rawImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyyZPBeWH8eaY1P0so5yyfaqwQgAWKp7vQ7Lwt/9h5VRkk24FJDfUpynLOBb0HBdzTRAZnvnX9pOblZyw-vNCBx3mhhYawi6s2KNdA3oUgopwopbIVuoUaE1Q6AhFrw22W_IJlwBaVyUST67bViPwulpswITl_rsvvuMBA3RHJf79FvBAyzjOpHpI8S_ebLnbwd9rjfFpiUfhc7iZpu5mr3QKZi01pdlEMxYtWb1o";

  const update = (val: number) => {
    setValue(val);
  };

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[2.39/1] overflow-hidden bg-surface-container select-none">
      {/* Final grade image */}
      <img
        alt="Final Master Grade Kodak LUT bride image"
        className="absolute inset-0 w-full h-full object-cover filter contrast-[1.15] saturate-[1.1] brightness-95"
        src={finalImage}
      />
      {/* Raw log image clipped by slider */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${value}%` }}
      >
        <img
          alt="Raw Log Sensor bride image"
          className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-75 brightness-125 sepia-[0.1]"
          src={rawImage}
        />
      </div>
      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 bg-primary"
        style={{ left: `${value}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center shadow-2xl">
          <span className="material-symbols-outlined text-primary text-sm font-bold">drag_handle</span>
        </div>
      </div>
      {/* Scrubber input */}
      <input
        aria-label="Color Grade Comparison Slider"
        className="absolute inset-0 opacity-0 cursor-ew-resize z-20 w-full h-full"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => update(Number(e.target.value))}
      />
    </div>
  );
}
