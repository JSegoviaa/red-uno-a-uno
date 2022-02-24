import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";
import RegisterModal from "../authmodal/AuthModal";
import { AuthContext } from "../../../context/auth/AuthContext";

const Footer = () => {
  const {
    auth,
    abrirRegistro,
    cerrarRegistro,
    mostrarRegistro,
    setMostrarRegistro,
  } = useContext(AuthContext);
  const router = useRouter();

  const goToHome = () => router.push("/");

  return (
    <footer
      className={`text-center text-lg-start text-muted ${styles.footerStyle}`}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4">
        <div className="me-5 d-none d-lg-block" />
      </section>
      <section className={styles.mbExtend}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-sm-12 col-md-6 p-4 col-xl-5">
              <h6 className="text-uppercase mb-4">
                <img
                  onClick={goToHome}
                  className="pointer"
                  src="/images/logos/red1a1-blanco.png"
                />
              </h6>
              <p className={styles.footerContent}>
                Red 1a1 es la solución para asesores independientes e
                inmobiliarias que permite la comunicación y el intercambio de
                carteras de clientes y propiedades. A través de esta herramienta
                versátil podrás agregar, buscar y compartir propiedades.
              </p>
            </div>

            <div className="col-sm-12 col-md-6 p-4 col-xl-2">
              <h5 className="fw-bold text-white mb-4">Secciones</h5>
              <Link href="/nosotros" scroll>
                <p className={`${styles.footerLink} pointer`}>Nosotros</p>
              </Link>
              <Link href="/paquetes" scroll>
                <p className={`${styles.footerLink} pointer`}>Paquetes</p>
              </Link>
              <Link href="/contacto" scroll>
                <p className={`${styles.footerLink} pointer`}>Contáctanos</p>
              </Link>
              {!auth.logged ? (
                <p
                  onClick={abrirRegistro}
                  className={`${styles.footerLink} pointer`}
                >
                  Registro
                </p>
              ) : null}
            </div>

            <div className="col-sm-12 col-md-6 p-4 col-xl-2">
              <h5 className="fw-bold text-white mb-4">Nuestras Oficinas</h5>
              <p className={styles.footerContent}>
                Querétaro, México. C.P. 76230
              </p>
            </div>

            <div className="col-sm-12 col-md-6 p-4 col-xl-3">
              <h5 className="fw-bold text-white mb-4">Teléfono</h5>
              <div className={styles.footerContent}>
                <p className={styles.footerPhone}>442 543 9190</p>
              </div>

              <a
                className="me-2"
                href="https://es-la.facebook.com/red1a1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/icons/facebook.png"
                  alt="Síguenos en facebook"
                />
              </a>
              <a
                href="https://wa.link/8udscw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/icons/whatsapp.png"
                  alt="Comunícate por whatsapp"
                />
              </a>
              <br />
              <br />
              <Link href="/terminos-y-condiciones" scroll>
                <p className={`${styles.footerLink} pointer`}>
                  Términos y condiciones
                </p>
              </Link>
              <Link href="/aviso-de-privacidad" scroll>
                <p className={`${styles.footerLink} pointer`}>
                  Aviso de privacidad
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © {new Date().getFullYear()}:{" "}
        <Link href="/" scroll>
          <span
            className="text-reset fw-bold pointer"
            style={{ textDecoration: "none" }}
          >
            Red 1a1
          </span>
        </Link>
        . Todos los derechos reservados.
      </div>
      <RegisterModal />
    </footer>
  );
};

export default Footer;
