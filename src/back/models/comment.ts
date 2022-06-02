// sequelize(new Sequelize) 데이터베이스 접속 정보
import { sequelize } from "./sequelize";
import { dbType } from "./index";
import {
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";

class Comment extends Model {
  public readonly id!: number;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  paranoid: false,
  underscored: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})

export const associate = (db: dbType) => {

};

export default Comment;