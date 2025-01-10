import React from "react";
import PopOver from "../../popover";
import { BlueAddIcon } from "@/icons";

interface TriggerButtonProps {
  children: React.ReactNode;
  label: string;
}

const TriggerButton: React.FC<TriggerButtonProps> = ({ children, label }) => {
  return <PopOver
    trigger={<div className="border-2 border-dashed w-full border-[#3352cc] hover:opacity-80 cursor-pointer transition duration-100 rounded-xl flex gap-x-2 justify-center items-center p-5 mt-4">
      <BlueAddIcon/>
      <p className="text-[#768BDD] font-bold">{label}</p>
    </div>} 
    className="w-[400px]"
  >
    {children}
  </PopOver>
};

export default TriggerButton;
