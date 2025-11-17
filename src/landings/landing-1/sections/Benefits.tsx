import * as React from "react";
import { BenefitsCard } from "@shared/components/index.ts";
import { benefitsCards, benefits } from "../config.ts";
import { iconMap } from "../ui/icon/Index.tsx";

const Benefits: React.FC = () => {
	return (
		<section>
			<h3>{benefits}</h3>
			<div className="from-blue-500 to-purple-600 flex items-center justify-center">
				{benefitsCards.map(card => {
					const IconContainer: React.FC = iconMap[card.icon as string];
					return (
						<BenefitsCard
							key={card.title}
							icon={<IconContainer />}
							title={card.title}
							description={card.description}
							stylesIcon={""}
						/>
					);
				})}
			</div>
		</section>
	);
};

export { Benefits };
