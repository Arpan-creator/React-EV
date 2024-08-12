import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import ImageCarousel from './ImageCarousel';
import './DestinationDetail.css';

const DestinationDetail = () => {
    const { id } = useParams();
    const { destinations } = useAppContext();
    const destination = destinations.find((dest) => dest.id === id);

    if (!destination) return <p>No Destination found</p>;

    return (
        <div className="container">
            <h2>{destination.name}</h2>
            <p>{destination.country}</p>
            <p>Budget: ${destination.averageBudget}</p>
            <img src={destination.profileImg} alt={destination.name} />
            <p>{destination.description}</p>
        </div>
    );
};

export default DestinationDetail;
