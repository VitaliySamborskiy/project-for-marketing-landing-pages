import * as React from "react";

type BenefitCardConfig = {
	icon?: string;
	title?: string;
	description?: string;
};

type BenefitCardComponents = {
	stylesBody?: string;
	stylesTitle?: string;
	stylesDescription?: string;
	stylesIcon?: string;
	icon?: React.ReactNode;
	title?: string;
	description?: string;
	children?: React.ReactNode;
};

export type { BenefitCardComponents, BenefitCardConfig };
