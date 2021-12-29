import { Col, Container, Form, Row } from 'react-bootstrap';
import useCategories from '../../../../hooks/useCategories';
import { useForm } from '../../../../hooks/useForm';
import Button from '../../../ui/button/Button';
import Modaltitle from '../../../ui/modaltitle/Modaltitle';
import Titulo from '../../../ui/titulo/Titulo';

const AnadirInmueble = () => {
  const { categorias } = useCategories();

  return (
    <Container>
      <Titulo titulo="Agrega un inmueble" />
      <br />
      <Form>
        {categorias.map((categoria) => (
          <Form.Check
            key={categoria._id}
            inline
            type="radio"
            name="group1"
            label={categoria.nombre}
            id="inline-radio-1"
            value={categoria._id}
          />
        ))}

        <Form.Group className="mb-3">
          <Form.Label>Tíulo del inmueble</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Ej. Casa en venta en Palmaris, Cancún
          </Form.Text>
        </Form.Group>
        <hr />
        <br />
        <div className="d-flex justify-content-start">
          <Modaltitle titulo="Detalles del inmueble" />
        </div>

        <Row>
          <Col sm={6}>
            <div>Tipo de propiedad</div>
          </Col>
          <Col sm={6}>
            <Form.Select>
              <option> </option>
              <option value="1">Casa</option>
              <option value="2">Departamento</option>
            </Form.Select>
          </Col>
        </Row>
        <br />

        <Row>
          <Col>
            <Row>
              <Col>ID del inmueble</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Antigüedad</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>M2 de construcción</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>M2 de terreno</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Habitaciones</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Baños completos</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Medio baños</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Estacionamientos</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Pisos</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="number" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Cuenta con agua</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Cuenta con luz</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Cuenta con gas</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Internet</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Seguridad privada</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Escuelas cercanas</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Mantenimiento</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Piscina</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Acceso a discapacitados</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <br />
        <div className="d-flex justify-content-start">
          <Modaltitle titulo="¿El inmueble está amueblado?" />
        </div>

        <Form.Check
          inline
          type="radio"
          name="group2"
          label="Sí"
          id="inline-radio-1"
        />
        <Form.Check
          inline
          type="radio"
          name="group2"
          label="No"
          id="inline-radio-2"
        />

        <Row>
          <Col>
            <Row>
              <Col>Camas</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Closet</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Sala</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Comedor</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Cocina</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>AA</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Refrigerador</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Estufa</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Microondas</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Minihorno</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>Secadora</Col>
              <Col>
                <Form.Select className="mb-3">
                  <option> </option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Otros (opcional)</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <hr />
        <br />

        <div className="d-flex justify-content-start">
          <Modaltitle titulo="Descripción del inmueble" />
        </div>

        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br />
        <hr />

        <Row>
          <Col>
            <Row>
              <Col>Valor</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>Comisiones</Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button titulo="Publicar" />
      </Form>
    </Container>
  );
};

export default AnadirInmueble;
