import { useFireStore } from "../../core/state";
import FireSequence from "./FireSequence";

export default function FireController() {
  const active = useFireStore((s) => s.active);
  const verse = useFireStore((s) => s.verse);

  if (!active || !verse) return null;

  return <FireSequence verse={verse} />;
}
