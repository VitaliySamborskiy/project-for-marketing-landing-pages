import * as React from "react";

type BaseButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	stylesButton?: string;
	stylesText?: string;
};

export type { BaseButtonType };
