/**
 * Enhanced Voice Generator
 * Now integrates Lapide exegesis into enrichment voice
 */

import { FormationalTrajectory } from '../types/trajectories';
import { SaintProfile } from '../types/saints';
import { GoldenThread } from '../types/threads';
import { LapidesConsultationResult } from '../types/lapide';
import { LapideConsultationEngine } from './lapideConsultationEngine';

export interface EnrichmentResponse {
  silence: boolean;
  response?: string;
  saint: SaintProfile;
  lapideInfluence?: LapidesConsultationResult;
  silenceLevel: 'passive' | 'highlight' | 'expand' | 'deep' | 'ask';
  depth: 'surface' | 'moderate' | 'deep';
}

export class VoiceGenerator {
  private lapideEngine: LapideConsultationEngine;

  constructor(lapideEngine: LapideConsultationEngine) {
    this.lapideEngine = lapideEngine;
  }

  generateEnrichment(
    verse: string,
    thread: GoldenThread,
    trajectory: FormationalTrajectory,
    saint: SaintProfile,
    silenceLevel: 'passive' | 'highlight' | 'expand' | 'deep' | 'ask'
  ): EnrichmentResponse {
    const lapideConsult = this.lapideEngine.consult(verse, thread, trajectory);
    const actualDepth = this.calculateDepth(silenceLevel, lapideConsult);

    if (silenceLevel === 'passive') {
      return {
        silence: true,
        saint,
        lapideInfluence: lapideConsult || undefined,
        silenceLevel: 'passive',
        depth: 'surface',
      };
    }

    const response = this.synthesizeVoice(
      verse,
      trajectory,
      saint,
      lapideConsult,
      silenceLevel,
      actualDepth
    );

    return {
      silence: false,
      response,
      saint,
      lapideInfluence: lapideConsult || undefined,
      silenceLevel,
      depth: actualDepth,
    };
  }

  private calculateDepth(
    silenceLevel: string,
    lapideConsult: LapidesConsultationResult | null
  ): 'surface' | 'moderate' | 'deep' {
    const silenceLevelDepth: Record<string, 'surface' | 'moderate' | 'deep'> = {
      passive: 'surface',
      highlight: 'surface',
      expand: 'moderate',
      deep: 'deep',
      ask: 'deep',
    };

    const baseDepth = silenceLevelDepth[silenceLevel] || 'moderate';

    if (lapideConsult?.voiceInfluence.depthLevel === 'deep') {
      return 'deep';
    }

    return baseDepth;
  }

  private synthesizeVoice(
    verse: string,
    trajectory: FormationalTrajectory,
    saint: SaintProfile,
    lapideConsult: LapidesConsultationResult | null,
    silenceLevel: string,
    depth: 'surface' | 'moderate' | 'deep'
  ): string {
    let response = '';

    const movementPhrase = this.getMovementPhrase(trajectory, saint, silenceLevel);
    response += movementPhrase;

    if (lapideConsult && depth === 'deep') {
      response += `\n\n${this.incorporateLapide(lapideConsult, silenceLevel)}`;
    }

    response += `\n\n— ${saint.name}`;

    return response;
  }

  private getMovementPhrase(
    trajectory: FormationalTrajectory,
    saint: SaintProfile,
    silenceLevel: string
  ): string {
    if (silenceLevel === 'expand') {
      return `This has not always been easy to live—\nand it has opened deeper than expected.`;
    }

    if (silenceLevel === 'deep') {
      return `The soul knows itself called to something true.\nYet the cost becomes apparent.\nStill, in the struggle, a deeper yes emerges.`;
    }

    return `There is more here than first appears.`;
  }

  private incorporateLapide(
    consult: LapidesConsultationResult,
    silenceLevel: string
  ): string {
    const tone = consult.voiceInfluence.suggestedTone;

    let incorporation = '';

    if (tone === 'clarifying') {
      incorporation = `The Word itself enters creation, holding all things in being.\nIn this, nothing is lost—all finds its truest meaning.`;
    } else if (tone === 'deepening') {
      incorporation = `What first appears as command reveals itself as invitation.\nThe law, rightly understood, is love seeking response.`;
    } else if (tone === 'paradoxical') {
      incorporation = `In drawing near, God remains transcendent.\nIn hiddenness, He is most intimately present.\nThe darkness itself is a form of light.`;
    }

    return incorporation;
  }
}
