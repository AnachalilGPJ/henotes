import { useState } from "react";

export default function FireController({ verse }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <div onClick={() => setActive(true)}>
        {verse.text}
      </div>

      {active && <FireSequence verse={verse} />}
    </>
  );
}
