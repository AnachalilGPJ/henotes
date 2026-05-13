import { TRAJECTORY_SYSTEM } from "../data/trajectories";

export function generateTrajectory(threadId: string, stage: string) {

  const base = TRAJECTORY_SYSTEM[threadId];
  if (!base) return null;

  return {
    id: base.id,
    thread: threadId,
    stage,
    movement: refineByStage(base.movement, stage)
  };
}

function refineByStage(movement: string[], stage: string) {

  switch (stage) {
    case "creation":
      return movement.slice(0, 2);

    case "fall":
      return movement.slice(0, 3);

    case "failure":
    case "collapse":
      return movement.slice(0, 4);

    case "prophetic":
      return movement.slice(2, 5);

    case "incarnation":
    case "fulfillment":
      return movement.slice(3);

    case "participation":
      return movement.slice(3);

    case "consummation":
      return movement.slice(-2);

    default:
      return movement;
  }
}
``
