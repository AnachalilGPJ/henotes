// src/ui/SproutLayer.tsx

import { motion } from "framer-motion";
import { runEnrichment } from "../core/enrichmentEngine";
import LayerControls from "./LayerControls";

export default function SproutLayer({ verse }) {

  const data = runEnrichment({
    text: verse.text,
    book: verse.book,
    chapter: verse.chapter
  });

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mt-3 p-4 rounded-xl bg-white shadow-md border border-gray-200"
    >

      <LayerControls data={data} />

    </motion.div>
  );
}
``
