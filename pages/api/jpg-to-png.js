import formidable from "formidable";
import fs from "fs";
import sharp from "sharp";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    const file = files.file;

    const pngBuffer = await sharp(file.filepath).png().toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.send(pngBuffer);
  });
}
