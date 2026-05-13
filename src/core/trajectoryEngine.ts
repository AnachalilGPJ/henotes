// src/core/trajectoryEngine.ts

import { TRAJECTORY_MAP } from "../data/trajectories";

export function generateTrajectory(threadId: string, stage: string) {
  const map = TRAJECTORY_MAP[threadId];

  if (!map) return null;

  return map[stage] ?? map.default;
}
