import express from "express";
import bodyParser from "body-parser";
import likeRoutes from "./src/like/like.router";
import connectDB from "./src/config/database.connection";

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/", likeRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Like service running on port ${PORT}`);
});
