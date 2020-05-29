import{useState, useEffect} from 'react';

const useFetchData = (datoABuscar) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${datoABuscar}`)
    .then(res => res.json())
    .then(data => setData(data))
  }, [datoABuscar]);

  return data;
};

export default useFetchData;
