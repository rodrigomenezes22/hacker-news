import React from 'react';

function NewsItem({ id, title, username, url, time, comments }) {
  return (
    <div>
      <p className='font-white'>{title}</p>
    </div>
  );
}

export default NewsItem;
