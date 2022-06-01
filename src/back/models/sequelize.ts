import { Sequelize } from "sequelize";
import config from "../config/config";

// process.env는 타입 추론이 애매해서 직접 타입 지정
const env = process.env.NODE_ENV as ("production" | "test" | "development") || "development";
const { database, username, password } = config[env];
const sequelize = new Sequelize( // 데이터베이스 접속 정보
  database!,
  username!,
  password!,
  config[env],
);

export { sequelize }
export default sequelize;