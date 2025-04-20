import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VideoList.css'; // Import CSS for styling

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [interactions, setInteractions] = useState({}); // Store interactions for each video

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(res => {
        setVideos(res.data.map(video => ({
          ...video,
          url: `http://localhost:5000/api/videos/${video.name}`, // Use the new endpoint
        })));
      })
      .catch(err => console.error('Error fetching videos:', err));
  }, []);

  const handleInteractionChange = (videoName, field, value) => {
    setInteractions(prev => ({
      ...prev,
      [videoName]: {
        ...prev[videoName],
        [field]: value
      }
    }));
  };

  const handleSubmit = (videoName) => {
    const interaction = interactions[videoName];
    axios.post('http://localhost:5000/api/interact', {
      videoId: videoName,
      liked: interaction?.liked || false,
      rating: interaction?.rating || 0,
      comment: interaction?.comment || ''
    })
      .then(() => alert('Interaction saved!'))
      .catch(err => console.error('Error saving interaction:', err));
  };

  return (
    <div className="video-grid">
      {videos.map(video => (
        <div key={video.name} className="video-item">
          <video width="320" height="240" controls loading="lazy">
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-caption">{video.name}</p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={interactions[video.name]?.liked || false}
                onChange={(e) => handleInteractionChange(video.name, 'liked', e.target.checked)}
              />
              Like
            </label>
          </div>
          <div>
            <label>
              Rate:
              <input
                type="number"
                min="0"
                max="5"
                value={interactions[video.name]?.rating || ''}
                onChange={(e) => handleInteractionChange(video.name, 'rating', parseInt(e.target.value, 10))}
              />
            </label>
          </div>
          <div>
            <label>
              Comment:
              <input
                type="text"
                maxLength="256"
                value={interactions[video.name]?.comment || ''}
                onChange={(e) => handleInteractionChange(video.name, 'comment', e.target.value)}
              />
            </label>
          </div>
          <button onClick={() => handleSubmit(video.name)}>Submit</button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;