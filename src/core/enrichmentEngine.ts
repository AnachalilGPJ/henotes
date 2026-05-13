// src/core/enrichmentEngine.ts

import { selectThreads } from "./threadSelector";
import { detectStage } from "./stageDetector";
import { generateTrajectory } from "./trajectoryEngine";
import { selectSaint } from "./saintSelector";
import { generateResponse } from "./responseGenerator";

export function runEnrichment(context: {
  text: string
  book: string
  chapter: number
}) {

  // 1. Thread selection
  const { primary } = selectThreads(context.text);

  if (!primary) return null;

  // ✅ NEW: Stage detection
  const stage = detectStage({
    book: context.book,
    chapter: context.chapter,
    text: context.text
  });

  // 3. Trajectory generation
  const trajectory = generateTrajectory(primary, stage);

  if (!trajectory) return null;

  // 4. Saint selection
  const saint = selectSaint(trajectory.id, stage);

  // 5. Response generation
  const response = generateResponse(trajectory.id, saint);

  return {
    thread: primary,
    stage,              // ✅ NEW important output
    trajectory,
    saint,
    response
  };
}
