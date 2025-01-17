import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Infobar from "@/components/global/infobar";
import Sidebar from "@/components/global/sidebar";
import React from "react";
import {
  prefetchUserAutomations,
  PrefetchUserProfile,
} from "@/react-query/prefetch";

interface LayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

const layout: React.FC<LayoutProps> = async ({ children, params }) => {
  const query = new QueryClient();

  await PrefetchUserProfile(query);

  await prefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/* Sidebar */}
        <Sidebar slug={params.slug} />
        {/* Infobar */}
        <div className="lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto">
          <Infobar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default layout;
