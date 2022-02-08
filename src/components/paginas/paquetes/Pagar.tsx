import { FormEvent, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Modal } from "react-bootstrap";
import Loading from "../../ui/loading/Loading";
import Button from "../../ui/button/Button";

interface Props {
  mostrarPago: boolean;
  cerrarPago?: () => void;
}

const Pagar = ({ mostrarPago, cerrarPago }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const procesarPago = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setLoading(true);

    if (!error) {
      const pago = paymentMethod;

      try {
        const resp = await fetch("http://localhost:3001/api/checkout", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(""),
        });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <Modal show={mostrarPago}>
      <form onSubmit={procesarPago}>
        <div className="form-group">
          <CardElement />
        </div>

        {!stripe ? (
          <Button titulo="Pagar" btn="Disabled" />
        ) : (
          <div>{loading ? <Loading /> : <Button titulo="Pagar" />}</div>
        )}
      </form>
    </Modal>
  );
};

export default Pagar;
