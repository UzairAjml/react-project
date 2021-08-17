import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
const Fortnite = () => {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const response = await res.json();
    const { data } = response;
    console.log(data);
    setItems(data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {item.map((items, key) => (
            <h1 key={key}>
              <Link to={`/Fortnite/${items.itemId}`}>{items.item.name}</Link>
            </h1>
          ))}
        </>
      )}
    </div>
  );
};

export default Fortnite;
