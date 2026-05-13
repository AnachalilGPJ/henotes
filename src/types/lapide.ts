/**
 * Lapide Exegesis type definitions
 */

export interface LapideExegesis {
  id: string;
  verseRange: string;
  text: string;
  lapideCommentary: string;
  themes: string[];
  theologicalInsight: string;
  christologicalNote: string;
  moralLesson: string;
  liturgicalConnection: string;
  applicableThreads: string[];
  applicableTrajectories: string[];
}

export interface LapidesConsultationResult {
  exegesis: LapideExegesis;
  applicableToThreads: string[];
  applicableToTrajectories: string[];
  voiceInfluence: {
    depthLevel: 'surface' | 'moderate' | 'deep';
    suggestedTone: 'clarifying' | 'deepening' | 'paradoxical';
    recommendedIncorporation: string;
  };
}
