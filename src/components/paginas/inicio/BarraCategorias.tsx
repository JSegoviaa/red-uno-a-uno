import { Dispatch, SetStateAction, useState } from "react";
import { Categoria } from "interfaces/InmueblesInterface";
import { TipoPropiedad } from "interfaces/PropertyType";
import styles from "./BarraCategoria.module.css";

interface Props {
  setTipoPropiedad: Dispatch<SetStateAction<string>>;
  propertyTypes: TipoPropiedad[];
  setCategoria: Dispatch<SetStateAction<string>>;
  categorias: Categoria[];
}

const BarraCategorias = (props: Props) => {
  const { setTipoPropiedad, propertyTypes, categorias, setCategoria } = props;
  const [selected, setSelected] = useState(false);

  const seleccionarCategoria = (id: string) => {
    setCategoria(id);
  };

  const seleccionarTipoPropiedad = (id: string) => {
    setTipoPropiedad(id);
    setSelected(true);
  };

  return (
    <>
      <div className="text-center">
        {propertyTypes.map((propertyType) => (
          <span
            className={styles.barraItem}
            onClick={() => seleccionarTipoPropiedad(propertyType._id)}
            key={propertyType._id}
          >
            {propertyType.nombre}
          </span>
        ))}
        {categorias?.map((categoria) => (
          <span
            className={styles.barraItem}
            onClick={() => {
              seleccionarCategoria(categoria._id);
            }}
            key={categoria._id}
          >
            {categoria.nombre}
          </span>
        ))}
      </div>
    </>
    // <Form.Select
    //   value={tipoPropiedad}
    //   onChange={(e) => setTipoPropiedad(e.target.value)}
    // >
    //   {propertyTypes.map((propertyType) => (
    //     <option key={propertyType._id} value={propertyType._id}>
    //       {propertyType.nombre}
    //     </option>
    //   ))}
    // </Form.Select>
  );
};

export default BarraCategorias;
