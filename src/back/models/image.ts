import { sequelize } from "./sequelize";
import { dbType } from "./index";
import {
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";

class Image extends Model {
  public readonly id!: number;
  public src!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Image.init({
  src: {
    type: DataTypes.STRING(200),
    allowNull: false,
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

};

export default Image;