import * as React from "react";
import type { BenefitCardComponents } from "@shared/types/benefits-card-types.ts";

const BenefitsCard: React.FC<BenefitCardComponents> = props => {
	return (
		<article
			className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center space-y-4 ${props.stylesBody}`}>
			{props.icon && <div className={`${props.stylesIcon}`}>{props.icon}</div>}
			<h3 className={`p-6 ${props.stylesTitle}`}>{props.title}</h3>
			<p className={`${props.stylesDescription}`}>{props.description}</p>
			{props.children}
		</article>
	);
};

export { BenefitsCard };
