// src/core/responseGenerator.ts

export function generateResponse(trajectory: any, saint: any) {

  const movement = trajectory.movement;

  const primary = movement[0];
  const secondary = movement[1] || "";

  let text = generateLine(primary, secondary);

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


// 🔧 Simple dynamic phrasing

function generateLine(a: string, b: string) {

  const templates = [
    `This has often begun in ${a}${b ? " and moved through " + b : ""}.`,
    `What begins here has not always remained simple.`,
    `This path has taken shape through something like ${a}.`,
    `What appears here has led deeper than expected.`
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}
``
