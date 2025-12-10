import formidable from "formidable";
import fs from "fs";
import sharp from "sharp";

export const config = {
  api: { bodyParser: false }
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    const file = fs.readFileSync(files.file.filepath);
    const output = await sharp(file).jpeg().toBuffer();

    res.setHeader("Content-Type", "image/jpeg");
    res.send(output);
  });
}
