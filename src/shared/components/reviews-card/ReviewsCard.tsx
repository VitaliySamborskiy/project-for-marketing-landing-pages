import * as React from "react";
import { ReviewsCardProps } from "@shared/types/reviews-card.ts";
import { globalIconMap } from "@shared/ui";

const ReviewsCard: React.FC<ReviewsCardProps> = ({
	countIcons = 5,
	Icons = globalIconMap.star,
	...props
}) => {
	return (
		<article className={props.cardStyle}>
			<figure
				className={props.countIconStyles}
				aria-hidden="true">
				{Array.from({ length: countIcons }).map((_, index) => (
					<Icons key={index} />
				))}
			</figure>
			<p className={props.descriptionStyle}>{props.description}</p>
			<div className={props.profileContainerStyle}>
				<img
					className={props.avatarStyle}
					src={props.avatar}
					alt="Avatar"
				/>
				<div className={props.profileDescriptionStyle}>
					<h4 className={props.nameStyle}>{props.name}</h4>
					{props.position && <p className={props.positionStyle}>{props.position}</p>}
				</div>
			</div>
		</article>
	);
};

export { ReviewsCard };
