import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "./spinner";

interface IndexProps {
  state: boolean;
  className?: string;
  children: React.ReactNode;
  color?: string;
}

const index: React.FC<IndexProps> = ({ state, className, children, color }) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default index;
