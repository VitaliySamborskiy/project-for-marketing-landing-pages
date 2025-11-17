import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";

const ShieldIcon: React.FC<IconProps> = ({
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
			data-source-line-start="52"
			data-source-line-end="52">
			<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
			<path d="m9 12 2 2 4-4"></path>
		</svg>
	);
};

export { ShieldIcon };
