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
  const [selectedPro, setSelected] = useState("");
  const [selectedCat, setselectedCat] = useState("");

  const seleccionarCategoria = (id: string) => {
    setCategoria(id);
    setselectedCat(id);
  };

  const seleccionarTipoPropiedad = (id: string) => {
    setTipoPropiedad(id);
    setSelected(id);
  };

  return (
    <>
      <div className={`text-center  d-flex justify-content-center `}>
        {propertyTypes.map((propertyType) => (
          <span
            className={`${
              selectedPro === propertyType._id
                ? styles.barraItemPropertyTypeSelected
                : styles.barraItemPropertyType
            } mx-2 pointer`}
            onClick={() => seleccionarTipoPropiedad(propertyType._id)}
            key={propertyType._id}
          >
            {propertyType.nombre}
          </span>
        ))}
        {categorias?.map((categoria) => (
          <span
            className={`${
              selectedCat === categoria._id
                ? styles.barraItemCategorySelected
                : styles.barraItemCategory
            } mx-2 pointer`}
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
  );
};

export default BarraCategorias;
