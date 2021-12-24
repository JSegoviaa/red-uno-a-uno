import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner
        style={{ backgroundColor: '#7149BC' }}
        animation="grow"
        variant="primary"
      />
    </div>
  );
};

export default Loading;
