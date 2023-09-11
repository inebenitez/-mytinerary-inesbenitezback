import express  from "express";
import create from "../controllers/activities/create.js";
import update from "../controllers/activities/update.js";
import read from "../controllers/activities/read.js";
import destroy from "../controllers/activities/destroy.js";

let router = express.Router();

router.post('/',create)
router.get('/',read)

router.put('/:a_id',update)
router.delete('/:id',destroy)

export default router