import {useState, useEffect} from 'react';

const useFetch = (datoABuscar) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${datoABuscar}`)
    .then(res => res.json())
    .then(data => setData(data.results))
  }, [datoABuscar]);

  return data;
};

export default useFetch;
