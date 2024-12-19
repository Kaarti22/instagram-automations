import React from "react";

interface SubscriptionPlanProps {
  type: "FREE" | "PRO";
  children: React.ReactNode;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  type,
  children,
}) => {
  return children;
};

export default SubscriptionPlan;
