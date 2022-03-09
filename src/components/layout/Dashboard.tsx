import { FC, useState } from "react";
import Sidebar from "components/paginas/dashboard/Sidebar";
import Main from "components/paginas/dashboard/Main";

interface Props {
  titulo: string;
}

const DashboardLayout: FC<Props> = ({ children, titulo }) => {
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
        handleToggleSidebar={handleToggleSidebar}
        titulo={titulo}
      >
        {children}
      </Main>
    </div>
  );
};

export default DashboardLayout;
