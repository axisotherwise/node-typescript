// sequelize(new Sequelize) 데이터베이스 접속 정보
import { sequelize } from "./sequelize";
import { dbType } from "./index";
import {
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";

class Post extends Model {
  public readonly id!: number;
  public title!: string;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init({
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  paranoid: false,
  underscored: false,
  modelName: "Post",
  tableName: "Posts",
  charset: "utf8",
  collate: "utf8_general_ci",
});

export const associate = (db: dbType) => {

};

export default Post;