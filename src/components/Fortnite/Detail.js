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

      const { data } = await res.json();

      if (data.item) {
        setItem(data.item);
      } else {
        throw 'No Such Product Found';
      }
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
      ) : err ? (
        <h1 style={{ alignItems: 'center', color: 'red' }}>{err}</h1>
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
        </div>
      )}
    </div>
  );
};

export default Detail;
