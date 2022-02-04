import Loading from "../../ui/loading/Loading";
import Individual from "./Individual";
import PaqueteMultiple from "./PaqueteMultiple";
import styles from "./paquetes.module.css";

const basico = [
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
];

const intermedio = [
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];

const PaquetesCards = () => {
  return (
    <div>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <Individual />
            <PaqueteMultiple
              titulo="Básico"
              precio={3199}
              descripcion="Precio especial al contratar de 3 a 5 usuarios."
              options={basico}
              usuario={3}
            />
            <PaqueteMultiple
              usuario={6}
              titulo="Intermedio"
              precio={2799}
              descripcion="Precio especial al contratar de 6 a 10 usuarios."
              options={intermedio}
            />
            <PaqueteMultiple
              titulo="Avanzado"
              precio={2499}
              descripcion="Precio especial de 11 usuarios en adelante."
              avanzado
            />

            <div className="col-12">
              <div className={`${styles.advice} text-center`}>
                *Precios indicados son por cada usuario.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaquetesCards;
