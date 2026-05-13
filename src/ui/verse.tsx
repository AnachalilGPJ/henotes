// src/ui/Verse.tsx

import { useState } from "react";
import SproutLayer from "./SproutLayer";

export default function Verse({ verse }) {

  const [active, setActive] = useState(false);

  return (
    <div className="relative">

    
<span
  className={`verse ${active ? "bg-yellow-200" : ""}`}
  onClick={() => setActive(!active)}
>

        {verse.text}
      </span>

      {active && <SproutLayer verse={verse} />}

    </div>
  );
}
