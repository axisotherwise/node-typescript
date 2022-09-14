import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY as string,
    secretAccessKey: process.env.S3_SECRET_KEY as string,
  },
  region: "ap-northeast-2",
});

const profileImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: "cupcik",
    key(req, file, done) {
      done(null, `images/P${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, done) {
    if (file.mimetype === "text/plain") {
      return done(new Error("멀터에서 생긴 에러!"));
    }
    done(null, true);
  }
});

const commentImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: "cupcik",
    key(req, file, done) {
      done(null, `images/C${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, done) {
    if (file.mimetype === "text/plain") {
      return done(new Error("멀터에서 생긴 에러!"));
    }
    done(null, true);
  }
});

const client = new S3Client({ region: "ap-northeast-2" });

const bucketPrams = { 
  Bucket: "cupcik",
  Key: "profile/444",

};

const run = async () => {
  try {
    const data = await s3.send(new DeleteObjectCommand(bucketPrams));
  } catch (err) {
    console.log(err);
  }
}



// export default upload.single("value");
export {
  profileImage,
  commentImage,
}
