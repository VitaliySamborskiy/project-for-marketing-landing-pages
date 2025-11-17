import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";

const Phone: React.FC<IconProps> = ({
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
			data-source-line-start="115"
			data-source-line-end="115">
			<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
			<rect
				x="2"
				y="4"
				width="20"
				height="16"
				rx="2"></rect>
		</svg>
	);
};

export { Phone };

// width="16"
// height="16"
// stroke="currentColor"
