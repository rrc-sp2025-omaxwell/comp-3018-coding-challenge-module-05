import { Request, Response, NextFunction } from "express";
import * as resourceService from "../services/resourceService"
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../../../constants/httpConstants";

// Handle POST requests
export const createResourceController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const {id, title, type, url, description} = req.body

        const newResourceData = {id, title, type, url, description}

        const newResource = await resourceService.createResource(newResourceData);

        res.status(HTTP_STATUS.CREATED).json(successResponse({newResource}, "Resource created successfully"))
    } catch (error: unknown) {
        next(error);
    }
}

// Handle GET all requests
export const getAllResourcesController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const resources = await resourceService.getAllResources();

        res.status(HTTP_STATUS.OK).json(successResponse({resources}, "Resources retrieved successfully"));
    } catch (error: unknown) {
        next(error);
    }
};

// handles GET request to read a single resource by ID
export const getResourcesByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;

        const resource = await resourceService.getResourcesById(id as string);

        res.status(HTTP_STATUS.OK).json(successResponse({resource}, "Resource retrieved successfully"));
    } catch (error: unknown) {
        next(error);
    }
};

// handles PUT request to update an existing resource
export const updateResourceController= async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { firebaseId } = req.params;
        const {id, title, type, url, description} = req.body;
        const updateResource = {id, title, type, url, description};

        const updatedResource = await resourceService.updateResource((firebaseId as string), updateResource);

        res.status(HTTP_STATUS.OK).json(successResponse({updatedResource}, "Resource updated successfully"));
    } catch (error: unknown) {
        next(error);
    }
};

// handles DELETE requests
export const deleteResourceController = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { firebaseId } = req.params;
        
        await resourceService.deleteResource(firebaseId as string);

        res.status(HTTP_STATUS.OK).json(successResponse({}, "Resource deleted successfully"));
    } catch (error: unknown) {
        next(error);
    }
};