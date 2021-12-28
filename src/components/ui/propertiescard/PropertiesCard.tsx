import { Col } from 'react-bootstrap';
import styles from './PropertiesCard.module.css';

interface Props {
  id: string;
  image?: string;
  titulo: string;
}

const PropertiesCard = ({ titulo, id, image }: Props) => {
  return (
    <Col xs={6} md={4} lg={4} xl={3} className="py-3 text-center">
      {/* <div className={styles.proCard}> */}
      <div className={`${styles.customCard} card`}>
        <img src={image} alt={titulo} />
        <div className={`${styles.proContent} my-3`}>{titulo}</div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className={`${styles.customBtn1} btn`}>
            {' '}
          </button>{' '}
          {/* <img src="/images/icons/properties-icons/1-gray.png" alt="..." /> */}
          <button type="button" className={`${styles.customBtn2} btn`}>
            {' '}
          </button>{' '}
          {/* <img src="/images/icons/properties-icons/2-gray.png" alt="..." /> */}
          <button type="button" className={`${styles.customBtn3} btn`}>
            {' '}
          </button>{' '}
          {/* <img src="/images/icons/properties-icons/3-gray.png" alt="..." /> */}
          <button type="button" className={`${styles.customBtn4} btn`}>
            {' '}
          </button>{' '}
          {/* <img src="/images/icons/properties-icons/4-gray.png" alt="..." /> */}
        </div>
      </div>
    </Col>
  );
};

export default PropertiesCard;
