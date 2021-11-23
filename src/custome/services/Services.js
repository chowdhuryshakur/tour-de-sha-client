import React, { useEffect, useState } from 'react';
import a from '../../img/about-banner.jpeg'
import './services.css'
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [offers, setOffers] = useState([])
  const [isloading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
    fetch('https://tourdesha.herokuapp.com/offers')
      .then(res => res.json())
      .then(data => {
        setOffers(data);
        setIsloading(false);
      })
  }, [])
  const head = {
    position: "absolute",
    top: "200px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <main style={{ minHeight: '100vh' }}>
      <div className="p">
        <img style={{ height: '200px', objectFit: 'cover' }} className='w-100' src={a} alt="" />
        <h1 style={head}>Our Offers</h1>
      </div>
      <div className="p-5">
        {isloading ? <div className='d-flex w-100 justify-content-center'>
          <Spinner animation="border" /></div>
         : <Row xs={1} md={3} className="g-4">
          {offers.map(course => (
            <Col>
              <Card style={{ backgroundColor: '#EDF2FF' }}>
                <Card.Img style={{ height: '250px' }} variant="top" src={course.img} />
                <Card.Body>
                  <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{course.name}</Card.Title>
                  <Card.Text className='d-flex' style={{ color: '#2D2E40' }}>
                    {course.desc.slice(0, 80)}
                  </Card.Text>
                  <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                    Cost: ${course.price}
                  </Card.Text>
                  <Link className="button"
                    to={`/details/${course._id}`}
                  >Book Now</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> }
      </div>
    </main>
  );
};

export default Courses;