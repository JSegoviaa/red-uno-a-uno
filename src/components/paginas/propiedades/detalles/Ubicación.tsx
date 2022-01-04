import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { AuthContext } from "../../../../context/auth/AuthContext";
import Button from "../../../ui/button/Button";
import styles from "./Inmueble.module.css";

const Ubicacion = () => {
  const { auth } = useContext(AuthContext);
  return (
    <section className="mt-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13707.497468222784!2d-86.94184331863724!3d20.50322147007999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1639609950616!5m2!1ses-419!2smx"
              width="100%"
              height={400}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className={`${styles.inmuebleTitle} mb-4`}>Apple Park</div>
            <div className="mb-4">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6 mb-4">
                  <span className={`${styles.inmuebleTipo2} me-4`}>
                    {" "}
                    <img
                      src="/images/icons/deatails-icons/ubicacion.png"
                      alt="..."
                      width={25}
                    />{" "}
                    481 Rosemont Dr
                  </span>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-12 col-xl-6 col-xxl-6 mb-4">
                  <span className={styles.inmuebleTipo2}>
                    {" "}
                    <img
                      src="/images/icons/deatails-icons/ciudad.png"
                      alt="..."
                      width={25}
                    />{" "}
                    Cupertino, CA.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.inmuebleContent}>
              Un desarrollo ubicado en una de las ciudades más seguras y con
              mayor crecimiento de inversión en el país, Pachuca, Hidalgo. Con
              casas integrales y acompañadas de amenidades que ayudan a fomentar
              la integración familiar.
            </div>
          </div>
          <div className="col-12 text-center my-5">
            {auth.uid ? <Button titulo="Añadir a favoritos" /> : null}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Ubicacion;
