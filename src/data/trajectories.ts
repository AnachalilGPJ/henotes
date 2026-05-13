// src/data/trajectories.ts

export const TRAJECTORY_MAP: any = {
  sacrifice: {
    sacrifice: {
      id: "sacrifice_surrender",
      movement: ["offering", "surrender", "union"]
    },
    default: {
      id: "sacrifice_surrender",
      movement: ["guilt", "offering", "surrender"]
    }
  },

  covenant: {
    law: {
      id: "law_to_love",
      movement: ["command", "failure", "longing"]
    },
    fulfillment: {
      id: "law_to_love",
      movement: ["love", "grace", "freedom"]
    },
    default: {
      id: "law_to_love",
      movement: ["law", "failure", "love"]
    }
  },

  kingship: {
    collapse: {
      id: "control_to_service",
      movement: ["control", "collapse", "surrender"]
    },
    fulfillment: {
      id: "control_to_service",
      movement: ["service", "participation"]
    },
    default: {
      id: "control_to_service",
      movement: ["authority", "service"]
    }
  }
};
