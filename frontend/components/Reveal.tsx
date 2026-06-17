"use client";

import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  return <div className={cx("reveal is-visible", className)}>{children}</div>;
}
