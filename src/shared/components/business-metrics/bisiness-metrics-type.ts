import * as React from "react";

type BusinessMetricsType = {
	title: string;
	description: string;
	stylesTitle?: string;
	stylesDescription?: string;
	stylesComponents?: string;
	stylesMetricData?: string;
	icon?: React.ReactNode;
};

export type { BusinessMetricsType };
