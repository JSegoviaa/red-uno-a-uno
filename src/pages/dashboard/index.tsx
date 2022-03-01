import { useRouter } from "next/router";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import SEO from "components/seo/SEO";
import styles from "./sidebar.module.css";
import { AdminRoute } from "hooks/useAdminRoute";

const index = () => {
  const router = useRouter();

  const goToHome = () => router.push("/");

  return (
    <>
      <SEO titulo="Panel de administración" url={router.asPath} />
      <section>
        <div className="row g-0">
          <div className="col">
            <ProSidebar>
              <Menu iconShape="square" className="px-3">
                <SidebarHeader>
                  <img
                    className="pointer"
                    onClick={goToHome}
                    src="/images/logos/red1-color.png"
                    alt="Red 1 a 1"
                  />
                </SidebarHeader>
                <SidebarContent className="py-4">
                  <MenuItem>
                    <i className="bi bi-clipboard-data me-2"></i> Dashboard
                  </MenuItem>
                  <SubMenu title="Reportes">
                    <MenuItem>
                      <i className="bi bi-cash-coin"></i> Ingresos
                    </MenuItem>
                    <MenuItem>
                      <i className="bi bi-cash-coin"></i> Ingresos
                    </MenuItem>
                    <MenuItem>
                      <i className="bi bi-cash-coin"></i> Ingresos
                    </MenuItem>
                    <MenuItem>
                      <i className="bi bi-cash-coin"></i> Ingresos
                    </MenuItem>
                    <MenuItem>
                      <i className="bi bi-cash-coin"></i> Ingresos
                    </MenuItem>
                    <MenuItem>
                      <i className="bi bi-cash-coin"></i> Ingresos
                    </MenuItem>
                  </SubMenu>
                  <MenuItem>
                    <i className="bi bi-clipboard-data me-2"></i> Dashboard
                  </MenuItem>
                  <MenuItem>
                    <i className="bi bi-clipboard-data me-2"></i> Dashboard
                  </MenuItem>
                </SidebarContent>
                <SidebarFooter className="text-center">
                  dashboard red1
                </SidebarFooter>
              </Menu>
            </ProSidebar>
          </div>
          <div className="col-10">
            <div className="ss">
              aaaaaa <br />
              aaaaaa <br />
              aaaaaa <br />
              aaaaaa <br />
              aaaaaa <br />
              aaaaaa <br />
              aaaaaa <br />
              aaaaaa <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
// export default AdminRoute(index);
