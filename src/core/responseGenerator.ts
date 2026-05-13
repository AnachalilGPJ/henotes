// src/core/responseGenerator.ts

const RESPONSES = {
  sacrifice_surrender: [
    "Something here is being given — and it has not always been easy to give."
  ],
  gift_restoration: [
    "What began as a gift has not always been held that way."
  ],
  control_to_service: [
    "What was held tightly has sometimes been opened differently."
  ]
};

export function generateResponse(trajectoryId: string, saint: any) {
  const options = RESPONSES[trajectoryId] || [
    "This has been lived before."
  ];

  const text = options[Math.floor(Math.random() * options.length)];

  return {
    text,
    saint: saint
      ? {
          name: saint.name,
          descriptor: saint.shortDescriptor
        }
      : null
  };
}
``
