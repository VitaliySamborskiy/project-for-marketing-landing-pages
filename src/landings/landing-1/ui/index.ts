import * as React from "react";
import type { IconProps } from "@shared/types/icon-props.ts";
import { LightningIcon } from "./icon/LightningIcon.tsx";
import { ShieldIcon } from "./icon/ShieldIcon.tsx";
import { ScaleIcon } from "./icon/ScaleIcon.tsx";
import { DisplayIcon } from "./icon/DisplayIcon.tsx";

export const iconMap: Record<string, React.FC<IconProps>> = {
	lightning: LightningIcon,
	shield: ShieldIcon,
	scale: ScaleIcon,
	display: DisplayIcon,
};
