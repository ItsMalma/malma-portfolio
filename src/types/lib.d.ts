import "react";
import "vite-plugin-svgr/client";

import type router from "#/libs/router";

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

declare module "vite-plugin-svgr/client" {
	interface ViteTypeOptions {
		strictImportMetaEnv: unknown;
	}

	interface ImportMetaEnv {
		readonly VITE_BASE_API_URL: string;
		readonly VITE_SERVICE_TYPE: "api" | "mock";
	}

	interface ImportMeta {
		readonly env: ImportMetaEnv;
	}
}
