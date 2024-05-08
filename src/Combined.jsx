import React, { useEffect, useState } from "react";
import "./index.css";

const Combined = () => {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      let res = await fetch(
        "https://api.pexels.com/v1/search?query=baby&orientation=landscape&per_page=20",
        {
          headers: {
            Authorization:
              "6zLPWhepHhu0d8d1LnhDNTbzsQfi76P8APN6x3RFFByFaDtL7qXkNQhV",
          },
        }
      );

      let data = await res.json();
      setData(data.photos);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="cartContainer">
        {data.map((item, index) => (
          <div key={index} className="cart">
            <div className="cartImages">
              <img 
                onClick={() => {
                  alert("Believe me I can handle it")
                }}
                className="imageOriginal"
                src={item.src.original}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Combined;
