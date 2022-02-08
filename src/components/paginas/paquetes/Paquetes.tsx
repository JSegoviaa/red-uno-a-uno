import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
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

const stripePromise = loadStripe(
  "pk_test_51JaTznCGqe3RvXVDQxhEnjQ1bLyso24Cy7whGP7B39Y2a8qCZEsEHEtCi1zxSfx0XbWiAUfqW10HbeCiyg4phaTy00Qu5iDasP"
);

const PaquetesCards = () => {
  return (
    <Elements stripe={stripePromise}>
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
    </Elements>
  );
};

export default PaquetesCards;
