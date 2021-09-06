import {useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:3001';

const useAPI = (path) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios.get(BASE_URL + path).then(res =>{
        setData(res.data);
        setLoading(false);
      });
    }, [path]);

    const onDelete = (id) => {
      axios.delete(BASE_URL + path + "/" + id).then(res => {
          axios.get(BASE_URL + path).then(
              res=> setData(res.data)
      )})
  }

    return {data, loading, onDelete};
}

export default useAPI; 