import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./src/user/user.router";
import connectDB from "./src/config/database.connection";

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
