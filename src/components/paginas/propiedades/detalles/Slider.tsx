import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Inmueble.module.css";
import "swiper/css";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";

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
        <>
          {inmuebles.inmueble.imgs.length === 0 ? (
            "No hay imágenes para mostrar"
          ) : (
            <>
              {inmuebles.inmueble.imgs.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image} alt={inmuebles.inmueble.titulo} />
                </SwiperSlide>
              ))}
            </>
          )}
        </>
      </Swiper>
    </div>
  );
};

export default Slider;
