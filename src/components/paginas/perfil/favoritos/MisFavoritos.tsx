import { Container, Row } from "react-bootstrap";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";

const propiedades = [
  {
    id: 1,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 2,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 3,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 4,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 5,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 6,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 7,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 8,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 9,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 10,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 11,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 12,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 13,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
  {
    id: 14,
    titulo:
      "Lorem ipsum dolor sit amet consectetur lit. Corporis, velit?",
    image: "/images/icons/properties-icons/ejemploPropiedad.png",
    icon: "/images/icons/fb-icon.png",
  },
];

const MiListaFavoritos = () => {
  return (
    <Container>
      <Row>
        {propiedades.map((propiedad) => (
          <FavPropertiesCard
            key={propiedad.id}
            id={propiedad.id}
            titulo={propiedad.titulo}
            image={propiedad.image}
            icon={propiedad.icon}
          />
        ))}
      </Row>
    </Container>
  );
};

export default MiListaFavoritos;
