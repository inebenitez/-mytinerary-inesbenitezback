import express from "express";
import { Router } from "express";
import read from "../controllers/itineraries/read.js";
import create from "../controllers/itineraries/create.js";
import update from "../controllers/itineraries/update.js";
import destroy from "../controllers/itineraries/destroy.js";

const router = express.Router();

router.get("/", read);
router.post("/", create);

// router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;