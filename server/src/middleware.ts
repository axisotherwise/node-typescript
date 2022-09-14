import { RequestHandler } from "express";

import { profileImage, commentImage} from "./multer";

const middle: RequestHandler = async (req, res, next) => {
    profileImage.single("imageValue")(req, res, err => {
        if (err) {
            console.log("에러에 걸렸습니다.");
            return res.json("에러에 걸렸습니다.");
        } else {
            next();
        }
    });
    console.log("멀터가 끝나고 다음 컨트롤러 실행");
}

export default middle;