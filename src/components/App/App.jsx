import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpaceObjectCard from '../SpaceObject/SpaceObjectCard';
import SpaceObjectCardSingle from '../SpaceObject/SpaceObjectCardSingle';
import SpaceObjectGenerator from '../SpaceObject/SpaceObjectGenerator';
import '../SpaceObject/SpaceObjectCardSingle.css';
import '../SpaceObject/SpaceObjectCard.css';

const App = () => {
  const [spaceObjects, setSpaceObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generatedObject, setGeneratedObject] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://webapplication220241104121304.azurewebsites.net/api/SpaceObject");
      setSpaceObjects(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleGeneratedObject = (newObject) => {
    setGeneratedObject(newObject);
    setSpaceObjects((prev) => [...prev, newObject]); // Добавляем новый объект в список
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Space Objects</h1>
      
      {/* Кнопка для генерации нового космического объекта */}
      <SpaceObjectGenerator onGenerate={handleGeneratedObject} />

      <div className="space-objects-container">
        {/* Отображение сгенерированного объекта, если он есть */}
        {generatedObject && (
          <SpaceObjectCardSingle
            name={generatedObject.name}
            type={generatedObject.type}
            coordinates={generatedObject.coordinates}
            imageUrl={generatedObject.imageUrl}
          />
        )}

        {/* Отображение всех загруженных космических объектов */}
        {spaceObjects.length > 0 ? (
          spaceObjects.map((spaceObject) => (
            <SpaceObjectCard key={spaceObject.id} spaceObject={spaceObject} />
          ))
        ) : (
          <div>No space objects found.</div>
        )}
      </div>
    </div>
  );
};

export default App;