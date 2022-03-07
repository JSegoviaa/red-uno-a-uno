import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "./Dashboard.module.css";
import { AuthContext } from "context/auth/AuthContext";

interface Props {
  handleToggleSidebar: (value: boolean) => void;
  toggled: boolean;
  collapsed: boolean;
}

const Sidebar = ({ handleToggleSidebar, toggled, collapsed }: Props) => {
  const { logOut } = useContext(AuthContext);
  const router = useRouter();

  const goToHome = () => router.push("/");
  return (
    <ProSidebar
      toggled={toggled}
      collapsed={collapsed}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      <Menu iconShape="square" className={`${styles.altura} mx-2`}>
        <SidebarHeader>
          <br />
          <img
            className="pointer"
            onClick={goToHome}
            src="/images/logos/red1-color.png"
            alt="Red 1 a 1"
          />
          <br />
          <br />
        </SidebarHeader>
        <SidebarContent className="py-4">
          <MenuItem>
            <i className="bi bi-grid-3x3 me-2" />
            <Link href="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <i className="bi bi-cash me-2" />
            <Link href="/dashboard/pagos">Pagos</Link>
          </MenuItem>
          <MenuItem>
            <i className="bi bi-people-fill me-2"></i> Usuarios
          </MenuItem>
          <MenuItem>
            <i className="bi bi-house-fill me-2"></i> Inmuebles
          </MenuItem>
          <MenuItem>
            <i className="bi bi-tags-fill me-2"></i>
            <Link href="/dashboard/categorias">Categorías</Link>
          </MenuItem>
          <MenuItem>
            <i className="bi bi-building me-2"></i> Tipo de propiedad
          </MenuItem>
        </SidebarContent>

        <div className={styles.position}>
          <MenuItem onClick={logOut}>
            <i className="bi bi-person-x-fill me-2" />
            Cerrar sesión
          </MenuItem>
        </div>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
