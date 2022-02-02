import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { InmueblesUsuario } from "../../../../interfaces/CrearInmuebleInterface";

SwiperCore.use([Pagination, Navigation]);

interface Props {
  inmuebles: {
    inmueble: InmueblesUsuario;
    ok: boolean;
  };
}

const SliderInmuebles = ({ inmuebles }: Props) => {
  return (
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
                  <div className="text-center">
                    <img src={image} alt={inmuebles.inmueble.titulo} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </>
      )}
    </Swiper>
  );
};

export default SliderInmuebles;
