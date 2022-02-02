import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Inmueble.module.css";
import "swiper/css";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Slider = ({ inmuebles }: Props) => {
  return (
    <>
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
            "No hay imágenes para mostrar"
          ) : (
            <>
              {inmuebles.inmueble.imgs.map((image) => {
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
      </div>
    </>
  );
};

export default Slider;
