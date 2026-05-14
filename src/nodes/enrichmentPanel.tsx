import { runEnrichment } from "../engine/enrichmentEngine";

export default function EnrichmentPanel({ verse }: any) {
  const data = runEnrichment(verse);

  return (
    <div className="
      w-[400px]
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      rounded-xl
      p-6
      text-white
    ">
      <ReflectionNode text={data.reflection} />
      <SaintNode name={data.saint} />
    </div>
  );
}
