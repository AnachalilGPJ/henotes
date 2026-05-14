import { motion } from "framer-motion";
import EnrichmentPanel from "../../nodes/EnrichmentPanel";

export default function FireSequence({ verse }: any) {
  return (
    <>
      {/* 🔥 EMBER GLOW */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="absolute w-full h-full bg-orange-500/10 blur-2xl"
      />

      {/* 🔥 LIFTED VERSE */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -60, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-white font-serif text-2xl mb-6"
      >
        {verse.text}
      </motion.div>

      {/* 🌊 GLASS PANEL */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute right-[10%]"
      >
        <EnrichmentPanel verse={verse} />
      </motion.div>
    </>
  );
}
