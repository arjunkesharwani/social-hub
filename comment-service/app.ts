import express from "express";
import bodyParser from "body-parser";
import commentRoutes from "./src/comment/comment.router";
import connectDB from "./src/config/database.connection";

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/", commentRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Comment service running on port ${PORT}`);
});
