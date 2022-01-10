import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Inmueble.module.css";
import "swiper/css";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";

const imagenes = [
  { id: 1, img: "" },
  { id: 2, img: "" },
  { id: 3, img: "" },
  { id: 4, img: "" },
  { id: 5, img: "" },
  { id: 6, img: "" },
  { id: 7, img: "" },
];

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const Slider = ({ inmuebles }: Props) => {
  return (
    <div className="text-center">
      <Swiper className="mySwiper">
        {imagenes.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.sliderEjemplo}>{image.id}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
