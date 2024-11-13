import React from 'react';
import './SpaceObjectCard.css';

const SpaceObjectCard = ({ spaceObject }) => {
  return (
    <div className="space-object-card">
      <h2>{spaceObject.name}</h2>
      <p>Type: {spaceObject.type}</p>
      <p>Coordinates: ({spaceObject.positionX}, {spaceObject.positionY}, {spaceObject.positionZ})</p>
      {spaceObject.imageUrl && (
        <img 
        src={spaceObject.imageUrl} 
        alt={spaceObject.name} 
        style={{ width: '100%', borderRadius: '8px' }} 
        />
        
      )}
    </div>
  );
};

export default SpaceObjectCard;