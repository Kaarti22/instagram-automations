import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import React from "react";

interface PopOverProps {
  trigger: JSX.Element;
  children: React.ReactNode;
  className?: string;
}

const PopOver: React.FC<PopOverProps> = ({ trigger, children, className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent
        className={cn("bg-[#1D1D1D] shadow-lg", className)}
        align="end"
        side="bottom"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
