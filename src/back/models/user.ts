import { sequelize } from "./sequelize";
import { dbType } from "./index";
import {
  Model,
  DataTypes,
} from "sequelize";

import Post from "./post";
import Comment from "./comment";

class User extends Model {
  public readonly id!: number;
  public email!: string;
  public password!: string;
  public name!: string;
  public married!: boolean;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  married: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  paranoid: true,
  underscored: false,
  modelName: "User",
  tableName: "users",
  charset: "utf8",
  collate: "utf8_general_ci",
});

export const associate = (db: dbType) => {
  db.User.hasMany(db.Post);
  db.User.hasMany(db.Comment);
}

export default User;

