// src/ui/Page.tsx

import Verse from "./Verse";

export default function Page({ verses }) {
  return (
    
<div className="page p-6 h-full flex flex-col gap-4">


      {verses.map(v => (
        <Verse key={v.id} verse={v} />
      ))}

    <div className="page">
  );
}
``
