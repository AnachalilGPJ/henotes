// src/ui/LayerControls.tsx

import { useState } from "react";
import LayerView from "./LayerView";

export default function LayerControls({ data }) {

  const [mode, setMode] = useState("enrichment");

  return (
    <div>

      {/* MODE TOGGLE */}
      <div className="flex gap-3 text-xs text-gray-500 mb-3">

        <button
          className={mode === "enrichment" ? "font-semibold" : ""}
          onClick={() => setMode("enrichment")}
        >
          Enrichment
        </button>

        <button
          className={mode === "doctrinal" ? "font-semibold" : ""}
          onClick={() => setMode("doctrinal")}
        >
          Doctrinal
        </button>

        <button
          className={mode === "combined" ? "font-semibold" : ""}
          onClick={() => setMode("combined")}
        >
          Combined
        </button>

      </div>

      {/* RENDER LAYER */}
      <LayerView mode={mode} data={data} />

    </div>
  );
}
