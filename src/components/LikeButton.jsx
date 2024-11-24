import React, { useState } from 'react';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike} style={{ padding: '10px', fontSize: '16px' }}>
      {liked ? 'Liked' : 'Not Liked'}
    </button>
  );
}

export default LikeButton;
