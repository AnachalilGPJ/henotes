// src/core/trajectoryEngine.ts

import { TRAJECTORY_MAP } from "../data/trajectories";

export function generateTrajectory(threadId: string, stage: string) {
  const thread = TRAJECTORY_MAP[threadId];

  if (!thread) return null;

  return thread[stage] || thread.default;
}
``
