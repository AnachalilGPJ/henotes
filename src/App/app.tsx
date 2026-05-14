import Scene from "../three/Scene";
import OverlayLayer from "../ui/OverlayLayer";

export default function App() {
  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <Scene />
      <OverlayLayer />
    </div>
  );
}
