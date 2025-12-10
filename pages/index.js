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
        background: "linear-gradient(135deg, #0474ff, #0057d2)",
        padding: "30px 15px",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "900" }}>
          Free Multi File Converter Tools
        </h1>
        <p style={{ fontSize: "20px", opacity: 0.9 }}>
          Convert any file instantly — Fast, Secure & Free!
        </p>
      </div>

      {/* MAIN WHITE CARD */}
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          maxWidth: "600px",
          margin: "0 auto",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            color: "#0057d2",
            fontWeight: "900",
            fontSize: "26px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Choose Your Conversion Tool
        </h2>

        {/* Tools Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "15px",
          }}
        >
          {tools.map((tool, index) => (
            <Link key={index} href={tool.link}>
              <div
                style={{
                  padding: "15px",
                  background: "#f3f7ff",
                  color: "#0057d2",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "17px",
                  textAlign: "center",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "0.25s",
                }}
              >
                {tool.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
        }
