import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DuckCard = ({ duck }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={duck.photo} alt={duck.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{duck.name}</h2>
        <p className="text-gray-600">{duck.description}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <button onClick={decrementCount} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              -
            </button>
            <span className="mx-2 text-lg font-semibold text-gray-800 bg-gray-200 border border-gray-300 rounded-full px-3 py-1">{count}</span>
            <button onClick={incrementCount} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              +
            </button>
          </div>
          <Link to={`/ducks/${encodeURIComponent(duck.name)}`} className="bg-gray-800 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
  View Details
</Link>

        </div>
      </div>
    </div>
  );
};

export default DuckCard;
