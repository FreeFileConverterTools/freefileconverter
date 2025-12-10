import { useState } from "react";

export default function PNGtoJPG() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const convert = async () => {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/png-to-jpg", {
      method: "POST",
      body: form
    });

    const blob = await res.blob();
    setResult(URL.createObjectURL(blob));
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">PNG to JPG Converter</h1>

      <input
        type="file"
        accept="image/png"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={convert}
        className="mt-3 p-2 bg-blue-600 text-white rounded"
      >
        Convert
      </button>

      {result && (
        <div className="mt-4">
          <h2 className="font-bold">Download Result:</h2>

          <a
            href={result}
            download="converted.jpg"
            className="text-blue-600 underline"
          >
            Download JPG
          </a>
        </div>
      )}
    </div>
  );
    }
