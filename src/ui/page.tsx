// src/ui/Page.tsx

import Verse from "./Verse";

export default function Page({ verses }) {
  return (
    <div className="h-full bg-[#fbf8f2] p-6 flex flex-col gap-4 font-serif text-[15px] leading-relaxed">

      {verses.map(v => (
        <Verse key={v.id} verse={v} />
      ))}

    <div className="page">
  );
}
``
