import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			generatedRouteTree: "src/utils/generated/route-tree.ts",
			customScaffolding: {
				lazyRouteTemplate: "",
				routeTemplate: "",
			},
		}),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"#": path.resolve(__dirname, "src"),
		},
	},
});
