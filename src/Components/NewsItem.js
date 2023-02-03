import React, { useEffect } from 'react';

function NewsItem({ id, title, username, url, time, comments }) {
  const handleTime = (time) => {
    const moment = require('moment');

    return moment(time).startOf('hour').fromNow();
  };

  return (
    <div className='news'>
      <div className='icon_text'>
        <span class='material-symbols-rounded'>arrow_circle_up</span>
        {id}
      </div>
      <div className='text'>{title}</div>
      <div className='icon_text'>
        <a href={url}>
          <span class='material-symbols-rounded'>link</span>
          Open Url
        </a>
      </div>
      <div className='icon_text'>
        <span class='material-symbols-rounded'>badge</span>
        {username}
      </div>
      <div className='icon_text'>
        <span class='material-symbols-rounded'>schedule</span>
        {handleTime(time)}
      </div>
      <div className='icon_inside'>
        <div className='chat_icon'>{comments}</div>
      </div>
    </div>
  );
}

export default NewsItem;
