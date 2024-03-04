import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetchingone() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setData("");
        setError("SomethingWentWrong!");
      });
  }, []);
  return (
    <div>
      {loading ? "Loading" : data.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingone;
