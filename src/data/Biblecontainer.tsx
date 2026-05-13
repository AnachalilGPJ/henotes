import { useEffect, useState } from "react";
import BibleBook from "./BibleBook";
import { fetchChapter } from "../data/bibleApi";

export default function BibleContainer() {

  const [pages, setPages] = useState([]);

  useEffect(() => {

    async function load() {

      const verses = await fetchChapter("john", 13);

      // split into two pages
      const left = verses.slice(0, Math.ceil(verses.length / 2));
      const right = verses.slice(Math.ceil(verses.length / 2));

      setPages([
        { verses: left },
        { verses: right }
      ]);
    }

    load();

  }, []);

  return <BibleBook pages={pages} />;
}
