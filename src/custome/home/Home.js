import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import './home.css'

const Home = () => {
  const [offers, setOffers] = useState([])
  const [discount, setDiscount] = useState([])
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://tourdesha.herokuapp.com/offers')
      .then(res => res.json())
      .then(data => setOffers(data))
  }, [])
  useEffect(() => {
    fetch('./course.json')
      .then(res => res.json())
      .then(data => setDiscount(data))
  }, [])
  useEffect(() => {
    fetch('./scholars.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px' }}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Green and green</h3>
            <p>Probably green is a color which give your eyes a true relax.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px' }}
            src={banner2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Lap of Hill</h3>
            <p>Appropriate for hill Lovers with beautiful lacks.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '550px' }}
            src={banner3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Icey Desert</h3>
            <p>Contrast fo light is heavy in the icey Hill!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="p-5">
        <h1 className="title">Best Offers</h1>
        <p className="sub-title">Some of Our Best Offers</p>
        <div className='w-75 mx-auto'>
          <Row xs={1} md={3} className="g-0">
            {offers.slice(0, 6).map(offer => (
              <Col className='border border-white'>
                <Card style={{ backgroundColor: '#EDF2FF' }}>
                  <Card.Img style={{ height: '280px' }} variant="top" src={offer.img} />
                  <Card.Body>
                    <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{offer.name}</Card.Title>
                    <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                      {offer.desc.slice(0, 50)}
                    </Card.Text>
                    <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                      Cost: ${offer.price}
                    </Card.Text>
                    <Link className="button"
                      to={`/details/${offer._id}`}
                    >Book Now</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="p-5">
        <h1 className="title">Deal & Discounts</h1>
        <p className="sub-title">We are offering best discount deals in the industry with premium services. Unbitably we are committed to you to serve you best and quality deals with tempting discount offers.</p>
        <div className='w-75 mx-auto'>
          <Row xs={1} md={4} className="g-0">
            {discount.slice(0, 4).map(disc => (
              <Col className='border border-white'>
                <Card style={{ backgroundColor: '#EDF2FF' }}>
                  <Card.Img style={{ height: '180px' }} variant="top" src={disc.picture} />
                  <Card.Body>
                    <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{disc.name}</Card.Title>
                    <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                      Discount Offer: ${disc.hadiya}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="p-5">
        <h1 className="title">Top Reviews</h1>
         <div className='w-75 mx-auto'>
          <Row xs={1} md={4} className="g-0">
            {reviews.slice(0, 4).map(re => (
              <Col className='border border-white'>
                <Card>
                  <Card.Img className='review-pic p-2' variant="top" src={re.picture} />
                  <Card.Body>
                    <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{re.name}</Card.Title>
                    <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                      {re.major}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </main>
   );
};

export default Home;