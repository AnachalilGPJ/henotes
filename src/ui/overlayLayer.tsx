import { useFireStore } from "../core/state";
import { playFireSound } from "../audio/fireSound";

export default function VerseRenderer() {
  const triggerFire = useFireStore((s) => s.triggerFire);

  const verse = {
    text: "Sell all you have and follow me",
    book: "Matthew",
    chapter: 19
  };

  return (
    <div className="text-white text-xl font-serif text-center">
      <span
        onClick={() => {
          triggerFire(verse);
          playFireSound();
        }}
        className="cursor-pointer hover:text-orange-300"
      >
        {verse.text}
      </span>
    </div>
  );
}
