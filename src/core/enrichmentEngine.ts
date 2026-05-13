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

  // 1. Identify thread
  const { primary } = selectThreads(context.text);

  if (!primary) return null;

  // 2. Detect stage (NEW CORE FEATURE)
  const stage = detectStage(context);

  // 3. Generate trajectory (NOW FULLY THEOLOGICAL)
  const trajectory = generateTrajectory(primary, stage);

  if (!trajectory) return null;

  // 4. Select saint (STAGE-AWARE)
  const saint = selectSaint(trajectory.id, stage);

  // 5. Generate output
  const response = generateResponse(trajectory, saint);

  return {
    thread: primary,
    stage,
    trajectory,
    saint,
    response
  };
}
``
