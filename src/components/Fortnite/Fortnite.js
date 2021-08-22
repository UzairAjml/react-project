import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../screens/Loader';
import '../../App.css';
const Fortnite = () => {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const res = await fetch(
        'https://fortnite-api.theapinetwork.com/upcoming/get'
      );
      const response = await res.json();

      const { data } = response;
      setItems(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className='container-fortnite'>
          <h1 style={{ color: 'green' }}>Upcoming Items</h1>
          <ul>
            {item.map((items, key) => {
              return (
                <li>
                  <h1 key={key}>
                    <Link to={`/Fortnite/${items.itemId}`}>
                      {items.item.name}
                    </Link>
                  </h1>
                </li>
              );
            })}
          </ul>
          <h1
            style={{
              color: 'red',
            }}
          >
            {error && 'Network Lost'}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Fortnite;
