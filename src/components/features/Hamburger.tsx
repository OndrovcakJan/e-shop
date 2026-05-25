import { useState } from "react";
import clsx from "clsx";

export default function Hamburger(){
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setOpen(!open)}
        className="relative w-6 h-4 rotate-0 transition-all duration-500 ease-in-out cursor-pointer focus:outline-none"
        aria-label="Toggle menu"
      >
        <span
          className={clsx(
            "block absolute h-1 w-full bg-primary rounded-[9px] opacity-100 left-0 transition-all duration-200 ease-in-out",
            {
              "top-2 rotate-135": open,
              "top-0 rotate-0": !open,
            },
          )}
        ></span>
        <span
          className={clsx(
            "block absolute h-1 w-full bg-primary rounded-[9px] left-0 transition-all duration-200 ease-in-out",
            {
              "top-2 opacity-0 -left-15": open,
              "top-2 opacity-100": !open,
            },
          )}
        ></span>
        <span
          className={clsx(
            "block absolute h-1 w-full bg-primary rounded-[9px] opacity-100 left-0 transition-all duration-200 ease-in-out",
            {
              "top-2 rotate-[-135deg]": open,
              "top-4 rotate-0": !open,
            },
          )}
        ></span>
      </button>
    </div>
  );
}
