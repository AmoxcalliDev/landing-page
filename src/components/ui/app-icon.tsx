"use client";

import { Icon } from "@iconify/react";

type AppIconProps = {
  icon: string;
  className?: string;
};

export default function AppIcon({ icon, className }: AppIconProps) {
  return <Icon icon={icon} className={className} aria-hidden="true" />;
}