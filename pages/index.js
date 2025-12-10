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
    { name: "Image Upscale (AI)", link: "/image-upscale" }
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0d47a1, #1976d2)",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "38px",
          fontWeight: "900",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Free Multi File Converter Tools
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          opacity: 0.9,
          marginBottom: "40px",
        }}
      >
        Convert any file instantly — Fast, Secure & Free!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
        }}
      >
        {tools.map((tool, index) => (
          <Link key={index} href={tool.link}>
            <div
              style={{
                padding: "18px",
                background: "white",
                color: "#0d47a1",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "17px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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
