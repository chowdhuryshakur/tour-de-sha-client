import React, { useEffect, useState } from 'react';
import a from '../../img/about-banner.jpeg'
import './booking.css'
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import UseAuth from '../../firebase/UseAuth';

const Booking = () => {
  const [offer, setOffer] = useState({})
  const { cid } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`https://tourdesha.herokuapp.com/offers/${cid}`)
      .then(res => res.json())
      .then(data => {
        setOffer(data)
      })
  }, [cid])
  const onSubmit = data => {
    data['status'] = 'pending';
    data['product'] = offer;
    data['user_mail'] = user.email

    axios.post('https://tourdesha.herokuapp.com/bookings', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('added successfully');
          reset();
        }
      })
  }
  const head = {
    position: "absolute",
    top: "200px",
    color: "white",
    fontSize: "50px",
    marginLeft: "50px",
    fontWeight: "bold"
  }
  return (
    <main>
      <div>
        <img style={{ height: '200px', objectFit: 'cover' }} className='w-100' src={a} alt="" />
        <h1 style={head}>Booking</h1>
      </div>
      <div className="p-5">
        <Row>
          <Col sm='12' md='4'>
            <Card className='d-flex'>
              <Card.Img style={{ height: '250px' }} variant="top" src={offer.img} />
              <Card.Body>
                <Card.Title style={{ color: '#2D2E40', fontWeight: "bold" }}>{offer.name}</Card.Title>
                <Card.Text className='d-flex' style={{ color: '#2D2E40' }}>
                  {offer.desc}
                </Card.Text>
                <Card.Text className='d-flex' style={{ color: '#2D2E40', fontWeight: "none" }}>
                  Cost: ${offer.price}
                </Card.Text>
              </Card.Body>
            </Card></Col>
          <Col sm='12' md='8'>
          <h4 style={{fontSize: '20px', marginLeft:'50px'}}>Booking Information</h4>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
              <h4 style={{fontSize: '18px'}}>Name</h4>
              <input className='input' {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
              <h4 style={{fontSize: '18px'}}>Address</h4>
              <input className='input' {...register("address")} placeholder="Address" />
              <input className='button-book' type="submit" value="Book"/>
            </form>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default Booking;