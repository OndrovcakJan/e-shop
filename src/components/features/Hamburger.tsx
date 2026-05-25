import { useState } from "react";
import clsx from "clsx";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}
