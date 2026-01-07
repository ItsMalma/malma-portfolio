import blogApiService from "#/services/api/blog";
import blogMockService from "#/services/mock/blog";

const serviceType = import.meta.env.VITE_SERVICE_TYPE;

export const blogService =
	serviceType === "api" ? blogApiService : blogMockService;
