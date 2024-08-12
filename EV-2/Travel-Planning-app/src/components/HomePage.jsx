import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../contexts/AppContext';
import './HomePage.css'; 

const HomePage = () => {
  const { destinations, setDestinations } = useContext(AppContext);

  useEffect(() => {
    axios.get('https://fir-mk-1-52b42-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json')
      .then(response => setDestinations(Object.values(response.data)))
      .catch(error => console.error('Error fetching destinations:', error));
  }, [setDestinations]);

  return (
    <div className="card-grid">
      {destinations.map((destination, index) => (
        <Link to={`/destination/${destination.id}`} key={destination.id || index}>
          <div className="destination-card">
            <img src={destination.profileImg} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.country}</p>
            <p>Budget: ${destination.averageBudget}</p>
            <p>Description: {destination.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
