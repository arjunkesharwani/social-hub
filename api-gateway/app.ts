import express from "express";
import bodyParser from "body-parser";
import gatewayRoutes from "./src/routes/router";

const app = express();

app.use(bodyParser.json());
app.use("/", gatewayRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API gateway running on port ${PORT}`);
});
