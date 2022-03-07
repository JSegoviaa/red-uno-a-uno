import { FC, useState } from "react";
import Sidebar from "components/paginas/dashboard/Sidebar";
import Main from "components/paginas/dashboard/Main";

const DashboardLayout: FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked: boolean) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value: boolean) => {
    setToggled(value);
  };

  return (
    <div className="d-flex">
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
      />
      <Main
        handleCollapsedChange={handleCollapsedChange}
        children={children}
        handleToggleSidebar={handleToggleSidebar}
      />
    </div>
  );
};

export default DashboardLayout;
