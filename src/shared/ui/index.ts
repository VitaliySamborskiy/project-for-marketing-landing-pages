import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";

import { BaseArrow } from "./icon/BaseArrow.tsx";
import { Email } from "./icon/Email.tsx";
import { GeoPoint } from "./icon/GeoPoint.tsx";
import { Phone } from "./icon/Phone.tsx";
import { Star } from "./icon/Star.tsx";

export const globalIconMap: Record<string, React.FC<IconProps>> = {
	baseArrow: BaseArrow,
	email: Email,
	phone: Phone,
	star: Star,
	geoPoint: GeoPoint,
};
