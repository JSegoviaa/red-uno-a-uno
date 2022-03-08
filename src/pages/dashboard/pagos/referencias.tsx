import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { Col, Row } from "react-bootstrap";
import { useForm } from "hooks/useForm";
import { useReferenciaNumero } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";

const Referencias = () => {
  const router = useRouter();

  const { formulario, handleChange } = useForm({
    numero: "",
  });

  const { numero } = formulario;
  const { cargando, referencia } = useReferenciaNumero(numero);

  return (
    <>
      <SEO titulo="Referencias" url={router.asPath} />
      <DashboardLayout>
        <Row>
          <Col>
            Buscar referencia
            <input
              type="text"
              value={numero}
              name="numero"
              onChange={handleChange}
              autoComplete="off"
            />
            <div>
              {cargando ? (
                <Loading />
              ) : (
                <>
                  {referencia ? (
                    <div>
                      <br />
                      Número de referencia {referencia.referencia}
                      <br />
                      <br />
                      Importe {referencia.importe}
                      <br />
                      <br />
                      Id de usuario <br />
                      {referencia.usuario}
                      <br />
                      <br />
                      Id de paquete
                      <br />
                      {referencia.paquete}
                      <br />
                      <br />
                      Usuarios
                      <br />
                      {referencia.totalUsuarios === 1
                        ? "NA"
                        : referencia.totalUsuarios}
                    </div>
                  ) : (
                    "No existe referencia con ese número"
                  )}
                </>
              )}
            </div>
          </Col>
          <Col>{referencia ? "Agregar paquete" : null}</Col>
        </Row>
      </DashboardLayout>
    </>
  );
};

export default Referencias;
