import express from "express";
import bodyParser from "body-parser";
import discussionRoutes from "./src/discussion/discussion.router";
import connectDB from "./src/config/database.connection";

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/", discussionRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Discussion service running on port ${PORT}`);
});
