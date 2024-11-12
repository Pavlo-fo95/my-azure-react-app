import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpaceObjectCard from '../SpaceObject/SpaceObjectCard';

const App = () => {
  const [spaceObjects, setSpaceObjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/SpaceObject`);
        setSpaceObjects(response.data);
        setLoading(false);
      } catch (err) {
        console.log("API URL:", process.env.REACT_APP_API_URL);
        console.error("Error fetching data:", err);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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