import React from 'react'

function NewsItem({ id, title, username, url, time, comments }) {
  return (
    <div>
      <p className='font-white'>{id}</p>
      <p className='font-white'>{title}</p>
      <p className='font-white'>{username}</p>
      <p className='font-white'>{url}</p>
      <p className='font-white'>{time}</p>
      <p className='font-white'>{comments}</p>
    </div>
  )
}

export default NewsItem
