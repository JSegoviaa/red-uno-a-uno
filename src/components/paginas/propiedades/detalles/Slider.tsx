import { useState } from "react";
import { Modal } from "react-bootstrap";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import SliderInmuebles from "./SliderInmuebles";
import styles from "./Inmueble.module.css";

SwiperCore.use([Pagination, Navigation]);

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Slider = ({ inmuebles }: Props) => {
  const [fullscreen, setFullscreen] = useState<any>(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  }

  return (
    <div className="text-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {inmuebles.inmueble.imgs.length === 0 ? (
          <div className={styles.noImage}>
            Aun no hay imágenes <br /> para mostrar :(
          </div>
        ) : (
          <>
            {inmuebles.inmueble.imgs.map((image, i) => {
              const sepracion = image.split(".");

              const extension = sepracion[sepracion.length - 1];
              const extensionesValidas = ["mp4"];
              return (
                <SwiperSlide key={image}>
                  <div
                    className={styles.contendorslide}
                    style={{ backgroundImage: `url(${image})` }}
                  />

                  {extensionesValidas.includes(extension) ? (
                    <iframe
                      src={image}
                      scrolling="no"
                      style={{
                        height: 450,
                        width: "100%",
                        overflow: "hidden",
                      }}
                    />
                  ) : (
                    <img
                      onClick={handleShow}
                      className={`${styles.slideImg} pointer`}
                      src={image}
                      alt={inmuebles.inmueble.titulo}
                    />
                  )}
                </SwiperSlide>
              );
            })}
          </>
        )}
      </Swiper>

      <Modal contentClassName={styles.modalBackG} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton closeVariant="white" className={`${styles.modalHeader} close-white`}>
          <Modal.Title>{inmuebles.inmueble.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SliderInmuebles inmuebles={inmuebles} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Slider;
