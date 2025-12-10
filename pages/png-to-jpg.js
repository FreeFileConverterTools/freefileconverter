import { useState } from "react";

export default function PngToJpg() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const convert = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch("/api/png-to-jpg", {
      method: "POST",
      body: formData,
    });

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setResult(url);
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 className="page-title">PNG to JPG Converter</h1>
      <p className="subtitle">Convert PNG image to JPG instantly – Free & Fast</p>

      <input type="file" accept="image/png" onChange={handleFile} />

      <br/><br/>

      <button
        onClick={convert}
        style={{
          background: "#0047a1",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          marginTop: "10px",
        }}
      >
        Convert Now
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h3>Download Your JPG File</h3>
          <a
            href={result}
            download="converted.jpg"
            style={{
              background: "white",
              color: "#0047a1",
              padding: "10px 18px",
              borderRadius: "6px",
            }}
          >
            Download JPG
          </a>
        </div>
      )}
    </div>
  );
    }
