import express from "express";
import { createEvent, listEvents } from "../controllers/eventsController.mjs";

const router = express.Router();

router.post("/", createEvent);
router.get("/", listEvents);

export default router;
