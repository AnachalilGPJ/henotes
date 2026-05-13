export async function fetchChapter(book: string, chapter: number) {

  const url = `https://bible-api.com/${book}%20${chapter}`;

  const res = await fetch(url);
  const data = await res.json();

  return data.verses.map((v: any) => ({
    id: `${v.book_id}-${v.chapter}-${v.verse}`,
    text: v.text,
    book: v.book_name,
    chapter: v.chapter,
    verse: v.verse
  }));
}
