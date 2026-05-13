import { selectThreads } from "./threadSelector";
import { detectStage } from "./stageDetector";
import { generateTrajectory } from "./trajectoryEngine";
import { selectSaint } from "./saintSelector";
import { generateResponse } from "./responseGenerator";
import { resolveDoctrine } from "./doctrineEngine";

export function runEnrichment(context) {

  const { primary } = selectThreads(context.text);
  if (!primary) return null;

  const stage = detectStage(context);

  const trajectory = generateTrajectory(primary, stage);
  if (!trajectory) return null;

  const saint = selectSaint(trajectory.id, stage);

  const response = generateResponse(trajectory, saint);

  // ✅ NEW doctrinal layer
  const doctrine = resolveDoctrine(primary, stage);

  return {
    thread: primary,
    stage,
    trajectory,
    saint,
    response,

    // ⚠️ IMPORTANT: do not always show
    doctrine
  };
}
``
