import { useRouter } from "next/router";
import DashboardLayout from "components/layout/Dashboard";
import SEO from "components/seo/SEO";
import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "hooks/useForm";
import { useReferenciaNumero } from "hooks/useReferencias";
import Loading from "components/ui/loading/Loading";
import styles from "components/paginas/dashboard/Dashboard.module.css";
import styleRef from "components/paginas/dashboard/Referencias.module.css";

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
      <DashboardLayout titulo="Referencias">
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row d-flex justify-content-between mb-3">
                  <div className="col-4">
                    <Form.Control
                      type="text"
                      placeholder="Buscar por referencia"
                    />
                  </div>
                  <div className="col-4">
                    <Form.Select aria-label="Default select example">
                      <option>Ordenar por:</option>
                      <option value="1">Fecha</option>
                      <option value="2">Paquetes</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="row d-flex justify-content-center my-4">
                  <div className="col-8">
                    <div className={styleRef.refCard}>
                      <div className="row">
                        <div className="col-3 p-0 text-center">
                          <div className={styleRef.paqueteBG}>
                            <div className={styleRef.paqueteNombre}>
                              Intermedio
                            </div>
                          </div>
                        </div>
                        <div className="col-9 p-0">
                          <div className={styleRef.refCardContenido}>
                            <div className={styleRef.TituloCard}>
                              Detalle de Referencia
                            </div>
                            <div className="mb-2">
                              <b>n° de ref: </b> 6165161565651856106
                            </div>
                            <div className="mb-2">
                              <b>Creada e:</b> 22/05/2022 - 14:81:96
                            </div>
                            <div className="mb-2">
                              <b>ID: </b> a6+sd5sa+6d54asd+4asd
                              <b> Usuario: </b> Juanito Espinito
                            </div>
                            <div className="mb-2">
                              <b>Importe Unitario: </b> $5000
                            </div>
                            <div className="mb-2">
                              <b>Usuarios totales: </b> 8
                            </div>
                            <div className="mt-4">
                              <button>APROBAR</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </>
  );
};

export default Referencias;
