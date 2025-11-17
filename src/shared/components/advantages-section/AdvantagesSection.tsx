import * as React from "react";
import type { AdvantagesSectionType } from "./advantages-section-type.ts";

const AdvantagesSection: React.FC<AdvantagesSectionType> = props => {
	return (
		<div className={props.stylesComponents}>
			{props.beforeChildren}
			<div className={props.stylesMainContainer}>
				<h2 className={props.stylesTitle}>{props.title}</h2>
				<p className={props.stylesDescription}>{props.description}</p>
			</div>
			{props.afterChildren}
		</div>
	);
};

export { AdvantagesSection };
