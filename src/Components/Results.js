import React from 'react';
import NewsItem from './NewsItem';

function Results() {
  return (
    <div>
      {results.map((result) => (
        <NewsItem />
      ))}
    </div>
  );
}

export default Results;
