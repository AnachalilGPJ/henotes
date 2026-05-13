import { DOCTRINAL_NODES } from "../data/doctrine";

export function resolveDoctrine(threadId: string, stage: string) {

  const nodes = DOCTRINAL_NODES.filter(
    n => n.threadId === threadId
  );

  if (!nodes.length) return null;

  const best = nodes.sort(
    (a, b) => totalWeight(b.sources) - totalWeight(a.sources)
  )[0];

  return best;
}

function totalWeight(sources) {
  return sources.reduce((sum, s) => sum + s.weight, 0);
}
``
