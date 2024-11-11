import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpaceObjectCard from '../SpaceObject/SpaceObjectCard';

const App = () => {
  const [spaceObjects, setSpaceObjects] = useState([]);
  const [loading, setLoading] = useState(true); // добавлен флаг для загрузки
  const [error, setError] = useState(null); // добавлено состояние для ошибки

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/SpaceObject`);
        setSpaceObjects(response.data);
        setLoading(false); // устанавливаем, что загрузка завершена
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error fetching data");
        setLoading(false); // устанавливаем, что загрузка завершена даже в случае ошибки
      }
    };

    fetchData();
  }, []);

  // Отображение состояния загрузки
  if (loading) {
    return <div>Loading...</div>;
  }

  // Отображение ошибки, если она есть
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Space Objects</h1>
      <div className="space-objects-container">
        {spaceObjects.length > 0 ? (
          spaceObjects.map(spaceObject => (
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
