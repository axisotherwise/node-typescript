import mysql from "mysql2";

const connect = mysql.createPool(
  {
    host: "localhost",
    database: "ts",
    user: "root",
    password: "broccoli",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

connect.getConnection(async (err, conn) => {
  try {
    conn.release();
  } catch (err) {
    err ? console.error(err) : console.log("db connect");
  }
});

const database = connect.promise();

export default database;