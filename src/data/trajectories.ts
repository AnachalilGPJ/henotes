// src/data/trajectories.ts

export type TrajectoryId =
  | "creation_restoration"
  | "covenant_transformation"
  | "sacrifice_redemption"
  | "kingship_transformation"
  | "liberation_path"
  | "illumination_path"
  | "indwelling_path"
  | "calling_path";

export const TRAJECTORY_SYSTEM = {
  creation: {
    id: "creation_restoration",
    movement: [
      "gift",
      "rupture",
      "exile",
      "restoration",
      "glorification"
    ]
  },

  covenant: {
    id: "covenant_transformation",
    movement: [
      "gift",
      "obligation",
      "failure",
      "longing",
      "promise",
      "interior transformation",
      "love"
    ]
  },

  sacrifice: {
    id: "sacrifice_redemption",
    movement: [
      "guilt",
      "offering",
      "substitution",
      "surrender",
      "union"
    ]
  },

  kingship: {
    id: "kingship_transformation",
    movement: [
      "desire for control",
      "misuse",
      "collapse",
      "promise",
      "paradox",
      "service",
      "participation"
    ]
  },

  exodus: {
    id: "liberation_path",
    movement: [
      "bondage",
      "deliverance",
      "testing",
      "dependence",
      "formation",
      "freedom"
    ]
  },

  logos: {
    id: "illumination_path",
    movement: [
      "ignorance",
      "partial light",
      "recognition",
      "illumination",
      "participation"
    ]
  },

  presence: {
    id: "indwelling_path",
    movement: [
      "distance",
      "mediated presence",
      "nearness",
      "incarnation",
      "indwelling",
      "communion"
    ]
  },

  prophetic: {
    id: "calling_path",
    movement: [
      "calling",
      "resistance",
      "obedience",
      "suffering",
      "fidelity",
      "fruit"
    ]
  }
};// src/data/trajectories.ts

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
