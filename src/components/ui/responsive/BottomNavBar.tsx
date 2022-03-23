import { useContext } from "react";
import { useRouter } from "next/router";
import { ChatContext } from "context/chat/ChatContext";
import styles from "./ResposiveStyles.module.css";

const BottomNavBar = () => {
  const { pathname, push } = useRouter();
  const { showCanvas, setShowCanvas, handleCloseCanvas } =
    useContext(ChatContext);
  const goToHome = () => push("/");
  const goToProfile = () => push("/perfil");
  const goToNot = () => push("/perfil/solicitudes");

  return (
    <div className={`${styles.whiteBBar}`}>
      <div className="row g-0">
        <div className="col text-center py-3">
          <div className={`${styles.btnContainer} py-2`}>
            {pathname === "/" ? (
              <img
                className={`${styles.whiteBBarImg} pointer`}
                src="/images/icons/whitebar-icon-orange-1.png"
                alt="..."
              />
            ) : (
              <img
                onClick={goToHome}
                className={`${styles.whiteBBarImg} pointer`}
                src="/images/icons/whitebar-icon-purple-1.png"
                alt="Inicio"
              />
            )}
          </div>
        </div>
        <div className="col text-center py-3">
          <div className={`${styles.btnContainer} py-2`}>
            <img
              onClick={() => {
                setShowCanvas(!showCanvas);
              }}
              className={`${styles.whiteBBarImg} pointer`}
              src="/images/icons/whitebar-icon-purple-2.png"
              alt="..."
            />
            {/* on click -->
                        <img className={`${styles.whiteBBarImg} pointer`} src="/images/icons/whitebar-icon-orange-2.png" alt="..." /> */}
          </div>
        </div>
        <div className="col text-center py-3">
          <div className={`${styles.btnContainer} py-2`}>
            {pathname === "/perfil/solicitudes" ? (
              <img
                className={`${styles.whiteBBarImg} pointer`}
                src="/images/icons/whitebar-icon-orange-3.png"
                alt="..."
              />
            ) : (
              <img
                onClick={goToNot}
                className={`${styles.whiteBBarImg} pointer`}
                src="/images/icons/whitebar-icon-purple-3.png"
                alt="..."
              />
            )}
          </div>
        </div>
        <div className="col text-center py-2">
          <div className="py-3">
            {pathname === "/perfil" ? (
              <img
                className={`${styles.whiteBBarImg} pointer`}
                src="/images/icons/whitebar-icon-orange-4.png"
                alt="..."
              />
            ) : (
              <img
                onClick={goToProfile}
                className={`${styles.whiteBBarImg} pointer`}
                src="/images/icons/whitebar-icon-purple-4.png"
                alt="..."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
