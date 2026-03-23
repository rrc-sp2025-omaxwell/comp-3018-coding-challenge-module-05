import Joi, { ObjectSchema } from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - type
 *         - url
 *         - description
 *       properties:
 *           title:
 *               type: string
 *               description: The name of the resource
 *               example: "Express.js guide"
 *           type:
 *               type: string
 *               description: the type of the resource
 *               example: "video"
 *           url:
 *               type: string
 *               description: "the url address of the resource"
 *               example: "https://expressjs.com/en/guide"
 *           description:
 *               type: string
 *               description: The description of an event
 *               example: "Official Express.js documentation"
 *           id:
 *               type: number
 *               description: the id associated with a resource
 *               example: 1
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       required:
 *         - error
 *         - message
 *       properties:
 *         error:
 *           type: string
 *           description: Error type or code
 *           example: "VALIDATION_ERROR"
 *         message:
 *           type: string
 *           description: Human-readable error message
 *           example: "capacity is required"
 *         details:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               field:
 *                 type: string
 *                 example: "email"
 *               issue:
 *                 type: string
 *                 example: "name is required"
 *           description: Detailed validation errors (optional)
 */