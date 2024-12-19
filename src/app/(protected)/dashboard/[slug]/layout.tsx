import Sidebar from "@/components/global/sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

const layout: React.FC<LayoutProps> = ({ children, params }) => {
    // QueryClient fetch data

  return <div className="p-3">
    {/* Sidebar */}
    <Sidebar slug={params.slug}/>
    {/* Navbar */}
    
  </div>;
};

export default layout;
