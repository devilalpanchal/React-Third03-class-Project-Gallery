import React, { useEffect, useState } from "react";

const Peacock = () => {
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    try {
      let res = await fetch(
        "https://api.pexels.com/v1/search?query=peacock&orientation=landscape&per_page=40",
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

  // console.log(data.src.original)
  return (
    <>
      <div className="cartContainer">
        {data.map((item, index) => (
          <div key={index} className="cart">
            <div className="cartImages">
              <img className="imageOriginal" src={item.src.original} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Peacock;
