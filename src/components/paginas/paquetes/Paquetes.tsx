import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { stripePublicId } from "credentials";
import { usePaquetes } from "../../../hooks/usePaquetes";
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

const stripePromise = loadStripe(stripePublicId);

const PaquetesCards = () => {
  const { paquetes } = usePaquetes();

  return (
    <Elements
      stripe={stripePromise}
      options={{ appearance: { theme: "stripe" } }}
    >
      <section className="my-5">
        <div className="container">
          <div className="row">
            <Individual />
            <>
              {paquetes.map((paquete) => (
                <PaqueteMultiple
                  key={paquete._id}
                  id={paquete._id}
                  titulo={paquete.nombre}
                  precio={paquete.precioAnual}
                  descripcion={paquete.descripcion}
                  usuario={
                    paquete.nombre === "Básico"
                      ? 3
                      : paquete.nombre === "Intermedio"
                      ? 6
                      : 11
                  }
                  options={
                    paquete.nombre === "Básico"
                      ? basico
                      : paquete.nombre === "Intermedio"
                      ? intermedio
                      : null
                  }
                  avanzado={paquete.nombre === "Avanzado" ? true : false}
                />
              ))}
            </>

            <div className="col-12">
              <div className={`${styles.advice} text-center`}>
                *Precios indicados son por cada usuario.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Elements>
  );
};

export default PaquetesCards;
