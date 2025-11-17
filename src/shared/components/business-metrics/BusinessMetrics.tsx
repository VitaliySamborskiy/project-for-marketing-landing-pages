import * as React from "react";
import { BusinessMetricsType } from "./bisiness-metrics-type.ts";

const BusinessMetrics: React.FC<BusinessMetricsType> = props => {
	return (
		<article className={props.stylesComponents}>
			{props.icon && <figure aria-hidden="true">{props.icon}</figure>}
			<div className={props.stylesMetricData}>
				<h3 className={props.stylesTitle}>{props.title}</h3>
				<p className={props.stylesDescription}>{props.description}</p>
			</div>
		</article>
	);
};

export { BusinessMetrics };
