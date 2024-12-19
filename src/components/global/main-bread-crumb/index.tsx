import React from "react";

interface MainBreadCrumbProps {
  page: string;
  slug?: string;
}

const MainBreadCrumb: React.FC<MainBreadCrumbProps> = ({ page, slug }) => {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && <div className="flex justify-center w-full">
            
        
        </div>}
    </div>
  );
};

export default MainBreadCrumb;
