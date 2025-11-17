import * as React from "react";

type ReviewsCardConfig = {
	avatar: string;
	name: string;
	position?: string;
	description: string;
};

type ReviewsCardProps = ReviewsCardConfig & {
	Icons?: React.FC;
	countIcons?: number;
	cardStyle?: string;
	descriptionStyle?: string;
	avatarStyle?: string;
	nameStyle?: string;
	positionStyle?: string;
	countIconStyles?: string;
	profileContainerStyle?: string;
	profileDescriptionStyle?: string;
};

export type { ReviewsCardProps, ReviewsCardConfig };
