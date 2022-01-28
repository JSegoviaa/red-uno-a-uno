import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Inmueble.module.css";
import "swiper/css";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { url } from "inspector";

// install Swiper modules
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
              {inmuebles.inmueble.imgs.map((image) => (
                <SwiperSlide key={image}>
                  <div className={styles.contendorslide} style={{backgroundImage: `url(${image})` ,}}>
                  </div>
                  <img
                      className={`${styles.slideImg} pointer`}
                      src={image}
                      alt={inmuebles.inmueble.titulo}
                    />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
