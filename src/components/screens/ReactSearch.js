import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../../App.css';
import Loader from './Loader';

const ReactSearch = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [query, setQuery] = useState('react hooks');
  const [err, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getresult();
  }, []);

  const getresult = async () => {
    try {
      const res = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query} `
      );
      setArticles(res.data.hits);
    } catch (error) {
      setError(error);
    }
    setloading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getresult();
  };

  const clearHandler = () => {
    setQuery('');
    searchInputRef.current.focus();
  };

  return (
    <div className='container react-search-colors' id='backGround'>
      <h1 id='heading-react'>React Hooks</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Explore It</Form.Label>
              <Form.Control
                type='text'
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                ref={searchInputRef}
              />

              <Button className='btn-react' variant='info' type='submit'>
                Search
              </Button>

              <Button
                className='btn-react'
                variant='dark'
                onClick={clearHandler}
              >
                Clear
              </Button>
            </Form.Group>
          </Form>

          <ul>
            {articles.map((art) => {
              return (
                <li key={art.objectID}>
                  <h4>
                    {' '}
                    <a href={art.url}>{art.title} </a>
                  </h4>
                </li>
              );
            })}
          </ul>
          <h1 style={{ alignItems: 'center', color: 'red' }}>
            {err && 'Check Your Internet Connection '}
          </h1>
        </>
      )}
    </div>
  );
};

export default ReactSearch;
