import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

// AWS.config.update({
//   accessKeyId: process.env.S3_ACCESS_KEY,
//   secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
//   region: "ap-northeast-2",
// });

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
  },
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "projectcupick",
    key(req, file, done) {
      done(null, `profile/${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;