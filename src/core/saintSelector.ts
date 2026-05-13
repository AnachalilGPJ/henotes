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

    // Primary: trajectory embodiment
    score += (saint.trajectoryStrength[trajectoryId] || 0) * 5;

    // Stage alignment
    if (saint.stageAffinity.includes(stage)) score += 4;

    // Silence sensitivity
    score -= saint.voiceProfile.silenceAffinity * 0.5;

    if (score > bestScore) {
      best = saint;
      bestScore = score;
    }
  }

  return best;
}
