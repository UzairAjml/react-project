import { useState, useEffect } from 'react';
import Loader from '../Loader';
import '../../App.css';
const Detail = ({ match }) => {
  const getProduct = async () => {
    const res = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    console.log(res);

    const { data } = await res.json();
    setItem(data.item);
    setLoader(false);
  };

  const [item, setItem] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProduct();

    console.log('Entered');
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className='container-fortnite'>
          <h1>{item.name}</h1>
          <img
            style={{ background: 'black' }}
            src={item.images.information}
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default Detail;
