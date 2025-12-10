import { useState } from "react";

export default function PngToSvg() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const convert = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch("/api/png-to-svg", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    setResult(url);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="page-title">PNG ➝ SVG Converter</h1>
      <p className="subtitle">Convert PNG images into SVG vector graphics — Free & Fast!</p>

      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          textAlign: "center",
          color: "#0047a1",
          fontWeight: "bold",
          boxShadow: "0px 6px 18px rgba(0,0,0,0.15)",
        }}
      >
        <input type="file" accept="image/png" onChange={handleFile} />
      </div>

      <button
        onClick={convert}
        style={{
          background: "#002f6c",
          color: "white",
          padding: "14px 28px",
          borderRadius: "10px",
          fontSize: "18px",
          marginTop: "20px",
        }}
      >
        {loading ? "Converting..." : "Convert to SVG"}
      </button>

      {result && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3>Your SVG File</h3>
          <a
            href={result}
            download="converted.svg"
            style={{
              background: "white",
              color: "#0047a1",
              padding: "14px 20px",
              borderRadius: "10px",
              display: "inline-block",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            Download SVG
          </a>
        </div>
      )}
    </div>
  );
      }
