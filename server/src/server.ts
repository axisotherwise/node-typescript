import app from "./app";

const prod: boolean = process.env.NODE_ENV === "production";

app.listen(prod ? process.env.PORT : 1000, () => console.log("start"));