// src/ui/LayerView.tsx

export default function LayerView({ mode, data }) {

  const { response, saint, doctrine } = data;

  // ✅ ENRICHMENT
  if (mode === "enrichment") {
    return (
      <>
        <p className="text-gray-700">{response.text}</p>

        {saint && (
          <p className="text-xs italic text-gray-500 mt-2">
            — {saint.name}
          </p>
        )}
      </>
    );
  }

  // ✅ DOCTRINAL
  if (mode === "doctrinal" && doctrine) {
    return (
      
<div className="doctrine text-sm">


        <p className="font-semibold">
          {doctrine.claim}
        </p>

        <ul className="mt-2 text-xs text-gray-600">
          {doctrine.sources.map((s, i) => (
            <li key={i}>• {s.ref}</li>
          ))}
        </ul>

      </div>
    );
  }

  // ✅ COMBINED
  if (mode === "combined") {
    return (
      <>
        <p>{response.text}</p>

        {doctrine && (
          <p className="text-xs mt-2 text-gray-600">
            {doctrine.claim}
          </p>
        )}

        {saint && (
          <p className="text-xs italic mt-2">
            — {saint.name}
          </p>
        )}
      </>
    );
  }

  return null;
}
``
