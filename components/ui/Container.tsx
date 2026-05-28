import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Size = "default" | "narrow" | "wide";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  as?: "div" | "section" | "header" | "footer" | "article";
}

const sizes: Record<Size, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  size = "default",
  as: Tag = "div",
  className,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-6 md:px-10", sizes[size], className)}
      {...rest}
    />
  );
}
