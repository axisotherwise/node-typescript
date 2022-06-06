import * as dotenv from "dotenv";
dotenv.config();

type Config = {
  username: string;
  password: string;
  database: string;
  [key: string]: string;
}

interface IConfig {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfig = {
  "development": {
    "username": process.env.DB_ID!,
    "password": process.env.DB_PASSWORD!,
    "database": process.env.DB!,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD!,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

export default config
