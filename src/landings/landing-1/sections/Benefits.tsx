import * as React from "react";
import { BenefitsCard } from "@shared/components/index.ts";
import { benefitsCards, text } from "../config.ts";
import type { IconProps } from "@shared/types/icon-props.ts";
import { iconMap } from "@landings/landing-1/ui/index.ts";

const Benefits: React.FC = () => {
	return (
		<section>
			<h3>{text.benefits.subtitle}</h3>
			<div className="from-blue-500 to-purple-600 flex items-center justify-center">
				{benefitsCards.map(card => {
					const IconContainer: React.FC<IconProps> = iconMap[card.icon as string];
					return (
						<BenefitsCard
							key={card.title}
							icon={<IconContainer strokeColor={"black"} />}
							title={card.title}
							description={card.description}
							stylesIcon={""}
							stylesBody={""}
						/>
					);
				})}
			</div>
		</section>
	);
};

export { Benefits };
