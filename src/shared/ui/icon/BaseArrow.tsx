import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";

const BaseArrow: React.FC<IconProps> = ({
	size = 24,
	stylesIcon = "",
	strokeColor = "white",
	fill = "none",
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={fill}
			stroke={strokeColor}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			className={stylesIcon}
			aria-hidden="true"
			data-source-file="src/components/landing-page/AdvantagesSection.tsx"
			data-source-line-start="141"
			data-source-line-end="141">
			<path d="M5 12h14"></path>
			<path d="m12 5 7 7-7 7"></path>
		</svg>
	);
};

export { BaseArrow };

// width = "18";
// height = "18";
// fill = "none";
// stroke = "currentColor";
