// sequelize(new Sequelize) 데이터베이스 접속 정보
import { sequelize } from "./sequelize";
import { dbType } from "./index";
import {
  Sequelize,
  Model,
  DataTypes,
} from "sequelize";

class Hashtag extends Model {
  public readonly id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Hashtag.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  sequelize,
  timestamps: true,
  paranoid: false,
  underscored: false,
  charset: "utf8",
  collate: "utf8_general_ci",
});

export const associate = (db: dbType) => {

};

export default Hashtag;