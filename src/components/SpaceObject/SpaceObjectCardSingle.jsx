import React from 'react';
import './SpaceObjectCardSingle.css';

const SpaceObjectCardSingle = ({ name, type, coordinates, imageUrl }) => {
  return (
    <div className="space-object-card-single">
      <h2 className="space-object-name-single">Name: {name}</h2>
      <p className="space-object-type-single">Type: {type}</p>
      <p className="space-object-coordinates-single">
        Coordinates: ({coordinates.x}, {coordinates.y}, {coordinates.z})
      </p>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="space-object-image-single" />
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
};

export default SpaceObjectCardSingle;