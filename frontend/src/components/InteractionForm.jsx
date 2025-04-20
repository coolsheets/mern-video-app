
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export default function InteractionForm({ videoId, userId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/interact', {
      userId,
      videoId,
      rating,
      comment,
      liked: true,
      watchTimeSeconds: 120
    });
    alert('Interaction recorded!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rate this video:
        <input type="number" min="1" max="5" value={rating} onChange={e => setRating(+e.target.value)} />
      </label>
      <br />
      <label>Comment:
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
