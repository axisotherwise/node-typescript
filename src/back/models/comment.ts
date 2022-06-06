import sequelize from "./sequelize";
import { dbType } from "./index";
import {
  Model,
  DataTypes,
} from "sequelize";

import User from "./user";
import Post from "./post";

class Comment extends Model {
  public readonly id!: number;
  public comment!: string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init({
  comment: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  paranoid: false,
  underscored: false,
  modelName: "Comment",
  tableName: "comments",
  charset: "utf8",
  collate: "utf8_general_ci",
});

export const associate = (db: dbType) => {
  db.Comment.belongsTo(db.User);
  db.Comment.belongsTo(db.Post);
}

export default Comment;