import ComponentNav from "../componentNav.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const InfoBar = () => {
  const [activeCategory, setActiveCategory] = useState("Personal");
  const navigate = useNavigate();

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "Personal") {
      navigate("/info/info-bar/person-info");
    } else if (category === "Accts Stat") {
      navigate("/info/info-bar/acct-stat");
    } else if (category === "Family") {
      navigate("/info/info-bar/family");
    } else if (category === "Employment Job") {
      navigate("/info/info-bar/employ-job");
    } else if (category === "Assets") {
      navigate("/info/info-bar/assets");
    }
  };

  const MyArrowComponent = () => (
    <div className="bg-gray-20 flex min-h-screen w-full">
      {/* Left Sidebar */}
      <div className="flex w-72 flex-col border-r p-6">
        <div className="mt-[calc(20vh)]">
          <ul>
            <li
              onClick={() => handleCategoryChange("Personal")}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === "Personal"
                  ? "text-lg text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Personal
            </li>
            <li
              onClick={() => handleCategoryChange("Accts Stat")}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === "Accts Stat"
                  ? "text-lg text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Accounts & Statutory
            </li>
            <li
              onClick={() => handleCategoryChange("Family")}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === "Family"
                  ? "text-lg text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Family
            </li>
            <li
              onClick={() => handleCategoryChange("Employment Job")}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === "Employment Job"
                  ? "text-lg text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Employment & Job
            </li>
            <li
              onClick={() => handleCategoryChange("Assets")}
              className={`cursor-pointer px-2 py-2 ${
                activeCategory === "Assets"
                  ? "text-lg text-blue-500"
                  : "text-gray-500"
              }`}
            >
              Assets
            </li>
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <ComponentNav
        title="Employee Information"
        navComponent={MyArrowComponent}
      />
    </main>
  );
};

export default InfoBar;
