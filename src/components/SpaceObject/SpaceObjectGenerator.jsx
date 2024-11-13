import React, { useState } from 'react';
import axios from 'axios';
import SpaceObjectCardSingle from './SpaceObjectCardSingle';

const SpaceObjectGenerator = ({ onGenerate }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [coordinates, setCoordinates] = useState({ x: '', y: '', z: '' });
  const [generatedObject, setGeneratedObject] = useState(null);

  const handleGenerateClick = async () => {
    try {
      const response = await axios.post("https://localhost:7161/api/SpaceObject/generate-image", {
        name,
        type,
        coordinates,
      });
      setGeneratedObject(response.data);
      onGenerate && onGenerate(response.data); // Передача сгенерированного объекта в App, если требуется
    } catch (error) {
      console.error('Ошибка при генерации объекта:', error);
    }
  };

  return (
    <div className="space-object-generator">
      <h3>Создать космический объект</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <label>
        Coordinates:
        <input type="number" placeholder="X" onChange={(e) => setCoordinates({ ...coordinates, x: e.target.value })} />
        <input type="number" placeholder="Y" onChange={(e) => setCoordinates({ ...coordinates, y: e.target.value })} />
        <input type="number" placeholder="Z" onChange={(e) => setCoordinates({ ...coordinates, z: e.target.value })} />
      </label>
      <button onClick={handleGenerateClick}>Generate Object</button>

    {generatedObject && (
      <SpaceObjectCardSingle
        name={generatedObject.name}
        type={generatedObject.type}
        coordinates={generatedObject.coordinates}
        imageUrl={generatedObject.imageUrl} // Передаём imageUrl
       />
      )}
    </div>
  );
};

export default SpaceObjectGenerator;