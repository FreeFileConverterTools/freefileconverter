import formidable from "formidable";
import fs from "fs";
import sharp from "sharp";

export const config = {
  api: { bodyParser: false },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    const file = files.file;

    // PNG → SVG is not native in SHARP,
    // So we convert to vectorized PNG inside SVG wrapper

    const buffer = fs.readFileSync(file.filepath);

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg">
        <image href="data:image/png;base64,${buffer.toString("base64")}" />
      </svg>
    `;

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgContent);
  });
}
