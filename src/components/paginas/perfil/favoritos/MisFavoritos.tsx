import { Container, Row } from "react-bootstrap";
import FavPropertiesCard from "../../../ui/propertiescard/FavPropertiesCard";

const propiedades = [
  {
    id: 1,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 2,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 3,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 4,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 5,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 6,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 7,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 8,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 9,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 10,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 11,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 12,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 13,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
  },
  {
    id: 14,
    titulo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, velit?",
    image: "/images/icons/perfil.png",
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
          />
        ))}
      </Row>
    </Container>
  );
};

export default MiListaFavoritos;