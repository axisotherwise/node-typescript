import app from "./app";

const prod: boolean = process.env.NODE_ENV === "production";

app.set("port", prod ? process.env.NODE_ENV : 2000);

app.listen(prod ? process.env.PORT : 2000, () => console.log(app.get("port")));