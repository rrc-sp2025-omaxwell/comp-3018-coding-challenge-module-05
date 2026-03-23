import express, { Router } from "express";
import * as resourceController from "../controllers/resourceController";

const router: Router = express.Router();

router.get("/", resourceController.getAllResourcesController);
router.post("/", resourceController.createResourceController);
router.get("/:id", resourceController.getResourcesByIdController);
router.put("/:id", resourceController.updateResourceController);
router.delete("/:id", resourceController.deleteResourceController);

export default router;