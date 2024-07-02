import express from "express";
import bodyParser from "body-parser";
import followRoutes from "./src/follow/follow.router";
import connectDB from "./src/config/database.connection";

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/", followRoutes);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`Follow service running on port ${PORT}`);
});
