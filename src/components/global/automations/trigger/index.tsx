"use client";

import { useQueryAutomation } from "@/hooks/user-queries";
import React from "react";
import ActiveTrigger from "./active";
import { Separator } from "@/components/ui/separator";

interface TriggerProps {
  id: string;
}

const Trigger: React.FC<TriggerProps> = ({ id }) => {
  const { data } = useQueryAutomation(id);

  // if (data?.data && data?.data?.trigger.length > 0) {
  return (
    <div className="flex flex-col gap-y-6 items-center">
      <ActiveTrigger
        type={"COMMENT"}
        keywords={[
          {
            id: "dfmajndfalsalmcsa",
            word: "getstarted",
            automationId: id,
          },
        ]}
      />
      {/* {data?.data?.trigger.length > 1 && <></>} */}
      <>
        <div className="relative w-6/12 mt-4">
          <p className="absolute transform px-2 -translate-y-1/2 top-1/2 -translate-x-1/2 left-1/2">
            or
          </p>
          <Separator
            orientation="horizontal"
            className="border-muted border-[1px]"
          />
        </div>
        <ActiveTrigger
          type={"MESSAGE"}
          keywords={[
            {
              id: "dfmajndfalsalmcsa",
              word: "Meplease",
              automationId: id,
            },
          ]}
        />
      </>
    </div>
  );
  // }
};

export default Trigger;
