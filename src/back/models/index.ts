// 유저 모델과 관계 메서드 import as = 다른 모델의 메서드와 구분하기 위한 별명
import User, { associate as associateUser } from "./user";
import Post, { associate as associatePost } from "./post";
import Image, { associate as associateImage } from "./image";

export * from "./sequelize"; // import와 동시에 export 

const db = { // 모델을 담아둘 객체
  User,
};

export type dbType = typeof db; // associate 메서드 매개변수

associateUser(db);