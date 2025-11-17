import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Hero, Benefits, Reviews, Footer } from "./sections/sections.ts";
import "@shared/styles/global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<>
			<Hero />
			<Benefits />
			<Reviews />
			<Footer />
		</>
	</StrictMode>
);
