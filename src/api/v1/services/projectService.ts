import { Resource } from "../models/resourceModel"
import * as firestoreRepository from "../repositories/firebaseRepository";

const COLLECTION = "resources"

// create new resource
export const createResource = async (
    resourceData: {
        id: number, title: string, type: string,
        url: string, description: string
    }
): Promise<Resource> => {
    try {
        const newResourceData = {
            ... resourceData,
            createdAt: new Date().toISOString(),
        };

        const firebaseId = await firestoreRepository.createDocument<Resource>(COLLECTION, newResourceData)
        
        return { firebaseId, ... newResourceData} as Resource;
    } catch (error: unknown) {
        const errorMessage = 
        error instanceof Error? error.message : "Unknown error";
        throw new Error(`Failed to create resource: ${errorMessage}`)
    };
};

// Get all resources
export const getAllResources = async (): Promise<Resource[]> => {
    try{
        const resources = await firestoreRepository.getAllDocuments<Resource>(COLLECTION);
        return resources;
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        throw new Error(
            `Failed to retrieve all resources: ${errorMessage}`
        );
    };
};

// Get resource by id
export const getResourcesById = async (id: string): Promise<Resource | null> => {
    try {
        const resource = await firestoreRepository.getDocById<Resource>(COLLECTION, id);
        if (!Response){
            throw new Error("Resource not found");
        }
        return resource;
        
    } catch (error: unknown) {
        const errorMessage = 
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(
            `Failed to retrieve resource: ${errorMessage}`
        )
    }
}