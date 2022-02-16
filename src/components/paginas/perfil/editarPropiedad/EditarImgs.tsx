import { useState } from "react";
import Button from "components/ui/button/Button";
import BorrarImgs from "./BorrarImgs";
import SubirImgs from "./SubirImgs";

const EditarImgs = () => {
  const [eliminarImg, setEliminarImg] = useState(false);
  const [subirImg, setSubirImg] = useState(false);

  const eliminarImgs = () => {
    setEliminarImg(true);
    setSubirImg(false);
  };

  const agregarImgs = () => {
    setEliminarImg(false);
    setSubirImg(true);
  };

  return (
    <div style={{ minHeight: 300 }}>
      <br />

      <div className="d-flex justify-content-center">
        {eliminarImg ? null : (
          <Button titulo="Quiero eliminar imágenes" onClick={eliminarImgs} />
        )}
        <div className="px-3" />
        {subirImg ? null : (
          <Button titulo="Quiero agregar imágenes" onClick={agregarImgs} />
        )}
      </div>
      <br />

      {eliminarImg ? <BorrarImgs /> : null}
      {subirImg ? <SubirImgs /> : null}
    </div>
  );
};

export default EditarImgs;
