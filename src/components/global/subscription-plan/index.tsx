import { useQueryUser } from "@/hooks/user-queries";
import React from "react";

interface SubscriptionPlanProps {
  type: "FREE" | "PRO";
  children: React.ReactNode;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  type,
  children,
}) => {
  const { data } = useQueryUser();
  return data?.data?.subscription?.plan === type && children;
};

export default SubscriptionPlan;
