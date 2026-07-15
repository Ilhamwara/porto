import { cn } from "../lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export function BentoCard({
  children,
  interactive = true,
  className,
  ...rest
}: BentoCardProps) {
  return (
    <div
      className={cn("bento-card", interactive && "bento-card-hover", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
