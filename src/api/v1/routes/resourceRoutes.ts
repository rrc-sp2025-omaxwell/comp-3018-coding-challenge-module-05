import express, { Router } from "express";
import * as resourceController from "../controllers/resourceController";

const router: Router = express.Router();


router.get("/", resourceController.getAllResourcesController);

/**
 * @openapi
 * /resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - title
 *               - type
 *               - url
 *               - description
 *             properties:
 *               title:
 *                   type: string
 *                   description: The name of the resource
 *                   example: "Express.js guide"
 *               type:
 *                   type: string
 *                   description: the type of the resource
 *                   example: "video"
 *               url:
 *                   type: string
 *                   description: "the url address of the resource"
 *                   example: "https://expressjs.com/en/guide"
 *               description:
 *                   type: string
 *                   description: The description of an event
 *                   example: "Official Express.js documentation"
 *               id:
 *                   type: number
 *                   description: the id associated with a resource
 *                   example: 1
 *     responses:
 *       '201':
 *         description: Resource created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       '400':
 *         description: Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", resourceController.createResourceController);
router.get("/:id", resourceController.getResourcesByIdController);
router.put("/:id", resourceController.updateResourceController);
router.delete("/:id", resourceController.deleteResourceController);

export default router;