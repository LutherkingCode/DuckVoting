import React from 'react';
import DuckCard from '../components/duckCard';
import ducks from '../data/duckList'


  


const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {ducks.map((duck) => (
          <>
            <div className="sm:flex">
              <DuckCard duck={duck} />

            </div>

          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
