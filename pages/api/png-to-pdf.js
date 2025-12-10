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

    const pdfBuffer = await sharp(file.filepath)
      .png()
      .toFormat("pdf")
      .toBuffer();

    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  });
}
