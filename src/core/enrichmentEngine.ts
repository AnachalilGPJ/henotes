// src/core/enrichmentEngine.ts

import { selectThreads } from "./threadSelector";
import { generateTrajectory } from "./trajectoryEngine";
import { selectSaint } from "./saintSelector";
import { generateResponse } from "./responseGenerator";

export function runEnrichment(text: string) {

  // 1. Select thread
  const { primary } = selectThreads(text);

  if (!primary) return null;

  // 2. Fake stage (temporary – refine later)
  const stage = "default";

  // 3. Generate trajectory
  const trajectory = generateTrajectory(primary, stage);

  if (!trajectory) return null;

  // 4. Select saint
  const saint = selectSaint(trajectory.id, stage);

  // 5. Generate response
  const response = generateResponse(trajectory.id, saint);

  return {
    thread: primary,
    trajectory,
    saint,
    response
  };
}
