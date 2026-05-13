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

    // trajectory match
    score += (s.trajectoryStrength[trajectoryId] || 0) * 5;

    // stage alignment
    if (s.stageAffinity.includes(stage)) score += 3;

    // silence weighting
    score -= s.voiceProfile.silenceAffinity * 0.5;

    if (score > bestScore) {
      best = s;
      bestScore = score;
    }
  }

  return best;
}
``
