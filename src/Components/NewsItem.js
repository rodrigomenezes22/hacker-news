import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from 'react-bootstrap/Stack';


function NewsItem({ id, title, username, url, time, comments }) {
return (
  <NewsItem bg="primary" variant="dark">
  <Container>
    <p className='font-white'>{title}</p>
    <div className="d-flex justify-content-end">
    <div className="bg-light border">Id</div>
      <div className="bg-light border ms-auto">Title</div>
      <div className="bg-light border ms-auto">username</div>
      <div className="bg-light border ms-auto">url</div>
      <div className="bg-light border ms-auto">time</div>
      <div className="bg-light border ms-auto">comments</div>
    </div>
  </Container>
  </NewsItem>
);
}



export default NewsItem;