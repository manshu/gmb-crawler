import { Business } from '../entities/Business';
import { searchBusinesses } from '../useCases/searchBusinesses';

export async function searchGoogleMaps(query: string) {
    try {
        const businesses: Business[] = await searchBusinesses(query) as Business[];
        return businesses;
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error at googleMaps:", error.message);
            console.error("Stack trace:", error.stack); // Log full error stack for troubleshooting
        } else {
            console.error("An unknown error occurred at googleMaps:", error);
        }
        return undefined; // Return undefined to signify that the operation failed

    }
}