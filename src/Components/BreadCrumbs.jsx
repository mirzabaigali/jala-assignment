import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumbs = ({ currentPath }) => {
  const pathSegments = currentPath.split("/").filter((segment) => segment); // Split the pathname and remove empty segments

  const generateBreadcrumbs = () => {
    const breadcrumbs = [];
    let pathSoFar = "";
    breadcrumbs.push(
      <li key={0} className="breadcrumb-item">
        <NavLink to="/home/dashboard" className="nav-NavLink text-white">
          Home
        </NavLink>
      </li>
    );
    pathSegments.forEach((segment, index) => {
      pathSoFar += `/${segment}`;
      const breadcrumbItem = (
        <li key={index + 1} className="breadcrumb-item">
          <NavLink to={pathSoFar} className="nav-NavLink text-white">
            {segment}
          </NavLink>
        </li>
      );
      breadcrumbs.push(breadcrumbItem);
    });
    return breadcrumbs;
  };

  return (
    <ul className="breadcrumb bg-dark mb-0 pl-0">
      {generateBreadcrumbs()}
      <li className="breadcrumb-item active">
        <span className="text-white">Current Page</span>
      </li>
    </ul>
  );
};

export default Breadcrumbs;
