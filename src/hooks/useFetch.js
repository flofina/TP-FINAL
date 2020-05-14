import React, {useState, useEffect} from 'react';

const useFetch = (datoABuscar) => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(`${datoABuscar}`)
    .then(res => res.json())
    .then(data => setData(data.results))
  }, [datoABuscar]);

  console.log(data)
  return data;
};

export default useFetch;

