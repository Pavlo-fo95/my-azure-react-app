import React, { useState } from 'react';
import './SpaceObjectCardSingle.css';

const SpaceObjectCardSingle = ({ onGenerate }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [coordinates, setCoordinates] = useState({ x: '', y: '', z: '' });
  const [imageUrl, setImageUrl] = useState(null);

  const handleGenerateClick = () => {
    // Передаем данные через колбэк для генерации объекта
    if (onGenerate) {
      onGenerate({ name, type, coordinates, setImageUrl });
    }
  };

  return (
    <div className="space-object-card-single">
      <div className="input-group">
        <label className="label">Name:</label>
        <input
          type="text"
          placeholder="enter by hand"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
      </div>

      <div className="input-group">
        <label className="label">Type:</label>
        <input
          type="text"
          placeholder="enter by hand"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="input"
        />
      </div>

      <div className="input-group">
        <label className="label">Coordinates:</label>
        <input
          type="number"
          placeholder="X"
          value={coordinates.x}
          onChange={(e) => setCoordinates({ ...coordinates, x: e.target.value })}
          className="input"
        />
        <input
          type="number"
          placeholder="Y"
          value={coordinates.y}
          onChange={(e) => setCoordinates({ ...coordinates, y: e.target.value })}
          className="input"
        />
        <input
          type="number"
          placeholder="Z"
          value={coordinates.z}
          onChange={(e) => setCoordinates({ ...coordinates, z: e.target.value })}
          className="input"
        />
      </div>

      <button className="generate-button" onClick={handleGenerateClick}>
        Generate Object
      </button>

      {/* Отображение сгенерированного объекта */}
      <h2 className="space-object-name-single">Name: {name}</h2>
      <p className="space-object-type-single">Type: {type}</p>
      <p className="space-object-coordinates-single">
        Coordinates: ({coordinates.x}, {coordinates.y}, {coordinates.z})
      </p>
      {imageUrl ? (
  <img 
    src={imageUrl} 
    alt={name} 
    className="space-object-image-single" 
  />
) : (
  <p>Image not available</p>
)}
    </div>
  );
};

export default SpaceObjectCardSingle;