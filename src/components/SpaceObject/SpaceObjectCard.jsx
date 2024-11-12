import React from 'react';
import './SpaceObjectCard.css';

const SpaceObjectCard = ({ spaceObject }) => {
  return (
    <div className="space-object-card">
      <h2 className="space-object-name">{spaceObject.name}</h2>
      <p className="space-object-type">Type: {spaceObject.type}</p>
      <p className="space-object-coordinates">
        Coordinates: ({spaceObject.positionX}, {spaceObject.positionY}, {spaceObject.positionZ})
      </p>
      {spaceObject.imageUrl && (
        <img 
          src={spaceObject.imageUrl} 
          alt={spaceObject.name} 
          className="space-object-image" 
        />
      )}
    </div>
  );
};

export default SpaceObjectCard;