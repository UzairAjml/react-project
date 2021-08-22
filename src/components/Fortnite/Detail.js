import { useState, useEffect } from 'react';
import Loader from '../screens/Loader';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
const Detail = ({ match }) => {
  const [err, setError] = useState(null);
  const getProduct = async () => {
    try {
      const res = await fetch(
        `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
      );
      console.log(res);

      const { data } = await res.json();
      setItem(data.item);
    } catch (error) {
      setError(error);
    }
    setLoader(false);
  };

  const [item, setItem] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Link to='/Fortnite'>
        <Button
          style={{
            marginTop: '2rem',
          }}
          variant='secondary'
        >
          Go Back
        </Button>
      </Link>
      {loader ? (
        <Loader />
      ) : (
        <div className='detail-card'>
          <Card
            style={{
              width: '18rem',
              marginTop: '7rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Img
              style={{ height: ' 15rem', background: 'black' }}
              variant='top'
              src={item.images.information}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
          <h1 style={{ alignItems: 'center', color: 'red' }}>
            {err && err.message}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Detail;
