// src/core/stageDetector.ts

import { BOOK_STAGE_MAP } from "../data/stageMap";

export function detectStage(context: {
  book: string
  chapter: number
  text: string
}) {

  let stage = BOOK_STAGE_MAP[context.book] || "default";

  stage = refineStageByChapter(context.book, context.chapter, stage);
  stage = refineStageByText(context.text, stage);

  return stage;
}


function refineStageByChapter(book: string, chapter: number, current: string) {

  if (book === "Genesis") {
    if (chapter <= 2) return "creation";
    if (chapter === 3) return "fall";
    if (chapter <= 11) return "early_fall";
    return "promise";
  }

  if (book === "Exodus") {
    if (chapter <= 12) return "liberation";
    if (chapter <= 24) return "covenant";
    return "law";
  }

  if (["Matthew", "Mark", "Luke", "John"].includes(book)) {
    if (chapter <= 3) return "incarnation";
    if (chapter <= 17) return "ministry";
    return "passion";
  }

  return current;
}


function refineStageByText(text: string, current: string) {

  const t = text.toLowerCase();

  if (t.includes("cross") || t.includes("crucify")) return "sacrifice";
  if (t.includes("resurrection") || t.includes("risen")) return "fulfillment";
  if (t.includes("kingdom")) return "kingship";
  if (t.includes("temple")) return "presence";

  return current;
}
