import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import eventsRoutes from "./routes/events.mjs";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/events", eventsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
