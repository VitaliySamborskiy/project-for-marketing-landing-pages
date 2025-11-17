import * as React from "react";
import type { IconProps } from "@shared/types/icon-props";
import { LightningIcon } from "./LightningIcon.tsx";
import { ShieldIcon } from "./ShieldIcon.tsx";
import { ScaleIcon } from "./ScaleIcon.tsx";
import { DisplayIcon } from "./DisplayIcon.tsx";

export const iconMap: Record<string, React.FC<IconProps>> = {
	lightning: LightningIcon,
	shield: ShieldIcon,
	scale: ScaleIcon,
	display: DisplayIcon,
};
