import * as React from "react";

type AdvantagesSectionType = {
	title: string;
	description: string;
	stylesTitle?: string;
	stylesDescription?: string;
	stylesComponents?: string;
	stylesMainContainer?: string;
	afterChildren?: React.ReactNode;
	beforeChildren?: React.ReactNode;
};

export type { AdvantagesSectionType };
