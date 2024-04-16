import React, { useState, useEffect } from 'react';

const APOD = ({ apiKey }) => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch APOD');
        }
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };

    fetchAPOD();
  }, [apiKey]);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={apodData.url} alt={apodData.title} className='apod-image' />
    </div>
  );
};

export default APOD;
