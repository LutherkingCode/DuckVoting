import React from 'react';
import { useParams } from 'react-router-dom';
import ducks from '../data/duckList';
import { Link } from 'react-router-dom';


const DuckPage = () => {
  const { duckName } = useParams();

  const duck = ducks.find((duck) => duck.name === duckName);

  if (!duck) {
    return <div>Duck not found</div>;
  }

  return (
    <div className="container h-screen mx-auto mt-8 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img src={duck.photo} alt={duck.name} className="w-full md:w-1/2 h-auto" />
        <div className="p-6 md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{duck.name}</h2>
          <p className="text-lg text-gray-600 mb-4">{duck.description}</p>
          <br></br><br></br>
          <Link to="/"className="bg-gray-800 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
  Vote for me
</Link>
        
        </div>
      </div>
    </div>
  );
};

export default DuckPage;
