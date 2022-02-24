import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import styles from "./Inmueble.module.css";

SwiperCore.use([Pagination, Navigation]);

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const SliderInmuebles = ({ inmuebles }: Props) => {
  return (
    <>
      {inmuebles.inmueble.imgs.length === 0 ? (
        <div className={styles.noImage}>
          Aun no hay imágenes <br /> para mostrar {":("}
        </div>
      ) : null}
      {inmuebles.inmueble.imgs.length === 1 ? (
        <div className="text-center">
          <div className={styles.contenedorimg}>
            <img
              className={styles.imagenes}
              src={inmuebles.inmueble.imgs[0]}
              alt={inmuebles.inmueble.titulo}
            />
          </div>
        </div>
      ) : (
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
            "No hay imágenes para mostrar"
          ) : (
            <>
              {inmuebles.inmueble.imgs.map((image) => {
                const sepracion = image.split(".");
                const extension = sepracion[sepracion.length - 1];
                const extensionesValidas = ["mp4"];
                return (
                  <SwiperSlide key={image}>
                    {extensionesValidas.includes(extension) ? (
                      <div className={styles.boxVideo}>
                        <video
                          className={styles.video}
                          src={image}
                          controls
                          controlsList="nodownload"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className={styles.contenedorimg}>
                          <img
                            className={styles.imagenes}
                            src={image}
                            alt={inmuebles.inmueble.titulo}
                          />
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </>
          )}
        </Swiper>
      )}
    </>
  );
};

export default SliderInmuebles;
