
import React, { useEffect, useState } from "react";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('items.json')
      .then(res => res.json())
      .then(data => setItems(data))
  }, []);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold m-10">Welcome to Arabic Learning School</h1>
      <div className="flex justify-center ml-20 mb-6"> 
        <img src="https://i.ibb.co/1Xxrt3c/240-F-392804645-t-UQxo5-Eg-PXv-FGxn5-OQgu-X1-Bi-Yl-I6l-COV-removebg-preview-1.png" alt="" />
      </div>
      <p className="w-1/2 text-center ml-52 mb-10">Arabic is a Central Semitic language, closely related to Aramaic and Hebrew. Standard or Classical Arabic – Fusha – is the distinct form of the language used in media, newspapers, literature, and other formal settings</p>
      <div className="grid grid-cols-4 gap-3">
        {items.length > 0 ? (
          <>
            {items.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.title} className="w-32 h-auto mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-center bg-blue-500 text-white px-4 py-2 rounded-lg">{item.see_more_button}</button>
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Items;
