import Link from "next/link";

export default function Home() {
  const tools = [
    { name: "PNG to JPG", link: "/png-to-jpg" },
    { name: "JPG to PNG", link: "/jpg-to-png" },
    { name: "PNG to PDF", link: "/png-to-pdf" },
    { name: "PNG to SVG", link: "/png-to-svg" },
    { name: "PNG to WEBP", link: "/png-to-webp" },
    { name: "PNG to EPS", link: "/png-to-eps" },
    { name: "PNG to GIF", link: "/png-to-gif" },
    { name: "Image Compressor", link: "/image-compress" },
    { name: "Image Resize", link: "/image-resize" },
    { name: "AI Upscale (HD)", link: "/image-upscale" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0047a1,#1976d2)",
        padding: "20px",
        color: "white",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "900",
          marginBottom: "10px",
        }}
      >
        Premium Multi File Converter Tools
      </h1>

      <p
        style={{
          textAlign: "center",
          opacity: 0.9,
          fontSize: "18px",
          marginBottom: "40px",
        }}
      >
        Convert any file instantly — Fast, Secure & Completely Free!
      </p>

      {/* TOOL GRID */}
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {tools.map((tool, index) => (
          <Link key={index} href={tool.link}>
            <div
              style={{
                background: "white",
                color: "#0047a1",
                padding: "18px",
                textAlign: "center",
                borderRadius: "14px",
                fontWeight: "bold",
                fontSize: "17px",
                boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {tool.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
