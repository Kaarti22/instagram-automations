import React from "react";
import {
  Sheet as ShadcnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SheetProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side: 'left' | 'right';
}

const Sheet: React.FC<SheetProps> = ({ trigger, children, className, side }) => {
  return (
    <ShadcnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent side={side} className="p-0">{children}</SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
