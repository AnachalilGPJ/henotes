// src/core/threadSelector.ts

import { THREAD_TRIGGERS } from "../data/threads";

export function selectThreads(text: string) {
  const tokens = text.toLowerCase();

  const scores: Record<string, number> = {};

  for (const thread of THREAD_TRIGGERS) {
    let score = 0;

    for (const word of thread.signals.keywords) {
      if (tokens.includes(word)) score += 3;
    }

    for (const entity of thread.signals.entities) {
      if (tokens.includes(entity.toLowerCase())) score += 5;
    }

    scores[thread.id] = score;
  }

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const primary = sorted[0]?.[0];
  const secondary = sorted.slice(1, 3).map(x => x[0]);

  return { primary, secondary };
}
