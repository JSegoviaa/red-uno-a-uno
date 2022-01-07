import { Container, Row } from "react-bootstrap";
import { Inmueble } from "../../../../interfaces/InmueblesInterface";
import Properties from "../../../ui/propertiescard/Properties";

interface Resp {
  data: {
    ok: boolean;
    total: number;
    inmuebles: Inmueble[];
  };
}

const ListaPropiedades = ({ data }: Resp) => {
  console.log(data, "asdfas");
  return (
    <Container>
      <Row>
        {data.inmuebles.map((propiedad) => (
          <Properties
            key={propiedad._id}
            id={propiedad._id}
            titulo={propiedad.titulo}
            image={propiedad.titulo}
            slug={propiedad.slug}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ListaPropiedades;
