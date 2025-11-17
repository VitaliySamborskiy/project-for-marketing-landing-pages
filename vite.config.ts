import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readdirSync, lstatSync } from "fs";
import tailwindcss from "@tailwindcss/vite";

function generatedLandingEntries(): Record<string, string> {
	const landingDir = resolve(__dirname, "src/landings");
	const entries: Record<string, string> = {};

	readdirSync(landingDir).forEach(landing => {
		const landingPath = `${landingDir}/${landing}`;
		if (lstatSync(landingPath).isDirectory()) {
			entries[landing] = resolve(__dirname, "src/landings/" + landing + "/index.html");
		}
	});

	return entries;
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
	],
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: generatedLandingEntries(),
		},
		minify: "terser",
		terserOptions: {},
	},

	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@shared": resolve(__dirname, "./src/shared"),
			"@landings": resolve(__dirname, "./src/landings"),
		},
	},

	server: {
		port: 8000,
		open: "/src/landings/landing-1/",
		cors: true,
	},
});
