import sequelize from "./sequelize";
import { dbType } from "./index";
import {
  Model,
  DataTypes,
} from "sequelize";

import User from "./user";
import Comment from "./comment";

class Post extends Model {
  public readonly id!: number;
  public title!: string;
  public content!: string;
  public image!: string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init({
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
}, {
  sequelize,
  timestamps: true,
  paranoid: false,
  underscored: false,
  modelName: "Post",
  tableName: "posts",
  charset: "utf8",
  collate: "utf8_general_ci",
});

export const associate = (db: dbType) => {
  db.Post.belongsTo(db.User);
  db.Post.hasMany(db.Comment);
}

export default Post;