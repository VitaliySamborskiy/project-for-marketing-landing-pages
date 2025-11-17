import * as React from "react";
import type { BaseButtonType } from "@shared/types/buttons-type.ts";

const BaseButton: React.FC<BaseButtonType> = ({
	text,
	onClick,
	stylesButton,
	stylesText,
	leftIcon,
	rightIcon,
	...props
}) => {
	return (
		<button
			onClick={onClick}
			className={stylesButton}
			disabled={props.disabled}>
			{leftIcon}
			{text && <span className={stylesText}>{text}</span>}
			{rightIcon}
		</button>
	);
};

export { BaseButton };
