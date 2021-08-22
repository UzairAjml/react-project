import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
        marginTop: '9rem',
        color: 'skyblue',
      }}
    ></Spinner>
  );
};

export default Loader;
