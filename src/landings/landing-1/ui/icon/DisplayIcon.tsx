import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";

const DisplayIcon: React.FC<IconProps> = ({
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
			<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
			<path d="M14 15H9v-5"></path>
			<path d="M16 3h5v5"></path>
			<path d="M21 3 9 15"></path>
		</svg>
	);
};

export { DisplayIcon };
