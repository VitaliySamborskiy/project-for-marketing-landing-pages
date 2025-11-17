import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";

const GeoPoint: React.FC<IconProps> = ({
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
			data-source-file="src/components/common/CommonFooter.tsx"
			data-source-line-start="127"
			data-source-line-end="127">
			<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
			<circle
				cx="12"
				cy="10"
				r="3"></circle>
		</svg>
	);
};

export { GeoPoint };

// width="16"
// height="16"
// stroke="currentColor"
