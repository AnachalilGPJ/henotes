// src/ui/Verse.tsx

import { useState } from "react";
import SproutLayer from "./SproutLayer";

export default function Verse({ verse }) {

  const [active, setActive] = useState(false);

  return (
    <div className="relative">

      <span
        onClick={() => setActive(prev => !prev)}
        className={`cursor-pointer px-1 rounded transition ${
          active ? "bg-yellow-200" : "hover:bg-yellow-100"
        }`}
      >
        {verse.text}
      </span>

      {active && <SproutLayer verse={verse} />}

    </div>
  );
}
