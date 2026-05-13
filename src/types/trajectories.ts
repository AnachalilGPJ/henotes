/**
 * Formational Trajectory type definitions
 */

export interface Movement {
  id: string;
  name: string;
  description: string;
  internalMovement: string;
  externalSign?: string;
  scriptureExamples: string[];
  saintExamples: string[];
}

export interface Tension {
  id: string;
  name: string;
  description: string;
  poles: [string, string]; // e.g., ["Control", "Surrender"]
  resolution?: string;
}

export interface FormationalTrajectory {
  id: string;
  name: string;
  description: string;
  threadIds: string[]; // which threads support this trajectory
  movements: Movement[];
  tensions: Tension[];
  fulfillment: string;
  christCenteredness: number; // 0-10 scale
  stageAffinity: string[]; // which thread stages it naturally pairs with
  saintAffinities: string[]; // which saint IDs embody this trajectory
  scripturePatterns: string[];
  liturgicalConnection?: string;
}

export interface TrajectoryMatch {
  trajectoryId: string;
  trajectoryName: string;
  score: number;
  matchedMovements: Movement[];
  matchedTensions: Tension[];
  matchedStageAffinity: string;
}

export interface TrajectorySelectionResult {
  primary: TrajectoryMatch;
  secondary: TrajectoryMatch[];
  confidence: number;
  reasoning: string;
}
