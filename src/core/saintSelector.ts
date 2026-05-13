// src/core/saintSelector.ts

import saints from "../data/saints.json";

export function selectSaint(trajectoryId: string, stage: string) {
  const candidates = saints.filter(s =>
    s.trajectories.includes(trajectoryId)
  );

  if (!candidates.length) return null;

  let best = null;
  let bestScore = -1;

  for (const saint of candidates) {
    let score = 0;

    // trajectory strength
    score += saint.trajectoryStrength[trajectoryId] * 5;

    // stage match
    if (saint.stageAffinity.includes(stage)) score += 3;

    // silence bias
    score -= saint.voiceProfile.silenceAffinity * 0.5;

    if (score > bestScore) {
      best = saint;
      bestScore = score;
    }
  }

  return best;
}
