import { Container, Row } from 'react-bootstrap';
import Button from '../../../ui/button/Button';
import styles from './Inmueble.module.css';

const Ubicacion = () => {
  return (
    <section className="mt-5">
      <Container>
        {/* <Row>
          <div className="col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13707.497468222784!2d-86.94184331863724!3d20.50322147007999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1639609950616!5m2!1ses-419!2smx"
              width="100%"
              height={400}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="col-6">
            <div className={styles.inmuebleTitle}>Apple Park</div>
            <div>
              <span className={styles.inmuebleTipo}>1 Apple Park Way 1​</span>
              <span className={styles.inmuebleTipo}>Cupertino, CA.</span>
            </div>
            <div className={styles.inmuebleContent}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              scelerisque pharetra quis elit senectus tincidunt. Augue ipsum
              risus at libero donec leo quam. Pellentesque tellus in convallis
              tellus nulla pulvinar molestie massa. Volutpat tellus.
            </div>
          </div>
          <div className="col-12 text-center my-5">
            <Button titulo="Añadir a favoritos" />
          </div>
        </Row> */}
      </Container>
    </section>
  );
};

export default Ubicacion;
