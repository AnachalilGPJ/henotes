// src/ui/BibleBook.tsx

import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

export default function BibleBook({ pages }) {
  return (
    <div className="h-screen w-screen bg-[#f6f2e8] flex items-center justify-center">

      <HTMLFlipBook
        width={900}
        height={650}
        showCover={true}
        className="shadow-2xl rounded-lg overflow-hidden"
      >
        {pages.map((page, i) => (
          <Page key={i} verses={page.verses} />
        ))}
      </HTMLFlipBook>

    </div>
  );
}
