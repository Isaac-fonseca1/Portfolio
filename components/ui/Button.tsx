"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-out disabled:opacity-50 disabled:pointer-events-none select-none active:translate-y-[1px]";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "relative bg-accent text-white hover:bg-accent-hover shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_10px_32px_-10px_rgba(0,82,255,0.55)] hover:shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_18px_40px_-12px_rgba(0,82,255,0.7)] btn-pulse-glow",
  secondary:
    "bg-transparent text-fg border border-border-strong hover:border-fg hover:bg-fg/[0.03]",
  ghost:
    "bg-transparent text-fg-muted hover:text-fg hover:bg-fg/[0.04]",
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", iconLeft, iconRight, className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
});

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  function LinkButton(
    { variant = "primary", size = "md", iconLeft, iconRight, className, children, ...rest },
    ref
  ) {
    return (
      <a
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...rest}
      >
        {iconLeft}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }
);
