
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function TopVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/top-rated')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Top Rated Videos</h2>
      <ul>
        {videos.map(v => (
          <li key={v.videoId}>
            {v.title} – ⭐ {v.avgRating} ({v.totalRatings} ratings)
          </li>
        ))}
      </ul>
    </div>
  );
}
