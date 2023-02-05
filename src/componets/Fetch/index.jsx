import React, { useState, useEffect } from "react";

export const Fetches = () => {
  let [data, SetData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => SetData(res));
  }, []);

  return (
    <div>
      {" "}
      {data.map((v) => {
        return (
          <>
            <div key={v.id} style={{ display: "flex" }}>
              {" "}
              <h1 style={{margin:"0 10px"}}>{v.id}</h1>
              <h1 style={{margin:"0 10px"}}>{v.name}</h1>
              <h1 style={{margin:"0 10px"}}>{v.website}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
};
