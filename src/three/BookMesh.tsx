import { Canvas } from "@react-three/fiber";
import { useFireStore } from "../core/state";
import BookMesh from "./BookMesh";

export default function Scene() {
  const active = useFireStore((s) => s.active);

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.6} />
      <BookMesh active={active} />
    </Canvas>
  );
}
