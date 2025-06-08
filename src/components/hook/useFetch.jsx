import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../api/Api";

const useFetch = (enpoint) => {
  const [datas, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    api
      .get(enpoint)
      .then((res) => {
        setData(res.data);
        console.log(datas);
      })

      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    <div className="text-center text-red-500">
      <p>Xato qildingiz</p>
    </div>;
  }
  return { datas, loading, error };
};

export default useFetch;
