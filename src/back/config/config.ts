import * as dotenv from "dotenv";
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: "mysql";
}

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  "development": {
    "username": "root",
    "password": "axisotherwise",
    "database": "notice_ts",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null!,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null!,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

export default config;
