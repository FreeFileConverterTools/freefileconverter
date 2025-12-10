import Link from "next/link";

export default function Home() {
  const tools = [
    { name: "PNG to JPG", link: "/tools/png-to-jpg" },
    { name: "JPG to PNG", link: "/tools/jpg-to-png" },
    { name: "PNG to PDF", link: "/tools/png-to-pdf" },
    { name: "PNG to SVG", link: "/tools/png-to-svg" },
    { name: "PNG to WEBP", link: "/tools/png-to-webp" },
    { name: "PNG to EPS", link: "/tools/png-to-eps" },
    { name: "PNG to GIF", link: "/tools/png-to-gif" },
    { name: "Image Compressor", link: "/tools/image-compress" },
    { name: "Image Resize", link: "/tools/image-resize" },
    { name: "AI Upscale (HD)", link: "/tools/image-upscale" },
  ];

  return (
    <div className="container">
      <h1 className="page-title">Premium Multi File Converter</h1>
      <p className="subtitle">
        Convert any file instantly — Fast, Secure & Completely Free!
      </p>

      <div className="tool-grid">
        {tools.map((tool, i) => (
          <Link key={i} href={tool.link}>
            <div className="tool-card">{tool.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
    }
