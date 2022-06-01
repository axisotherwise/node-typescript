// sequelize(new Sequelize) 데이터베이스 접속 정보
import { sequelize } from "./sequelize";
import { dbType } from "./index";
import {
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";

class User extends Model {
  // ! = 반드시 존재
  // readonly = 데이터가 변경될 일이 없는 컬럼
  public readonly id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// init = 생성한 모델 클래스의 실제 컬럼 생성
User.init({
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
}, {
  sequelize, // new Sequelize를 모델에 연결해야 실제 데이터베이스랑 연결
  timestamps: true,
  paranoid: false,
  underscored: false,
  modelName: "User",
  tableName: "users",
  charset: "utf8",
  collate: "utf8_general_ci",
});

export const associate = (db: dbType) => { // associate = 관계 설정 (static associate(db))
  
};

export default User;