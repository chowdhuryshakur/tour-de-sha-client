import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../firebase/UseAuth';
import { Spinner } from 'react-bootstrap';

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [isloading, setIsloading] = useState(false)
    const [id, setId] = useState('');
    const { user } = UseAuth();
    useEffect(() => {
        setIsloading(true);
        fetch(`https://tourdesha.herokuapp.com/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setIsloading(false);
            })
    }, [id])
    const deleteBooking = id => {
        if (window.confirm("Are you sure?")) {
            axios.delete(`https://tourdesha.herokuapp.com/bookings/${id}`)
                .then(res => {
                    if (res.data.acknowledged) {
                        setId(id)
                        alert('deleted successfully');
                    }
                })
        }
    }
    return (
        <div style={{ minHeight: '66vh' }}>
            <div className='m-3'>
                <h3 style={{ marginLeft: '5%' }}>Booked Services</h3>
                {isloading ? <div className='d-flex w-100 justify-content-center'>
                    <Spinner animation="border" /></div>
                    : <div>{bookings.map(b => <div style={{ width: '90%', margin: '0 auto', border: '1px solid orange' }} className='d-flex p-2 align-items-center'>
                        <img style={{ width: '10%' }} src={b.product.img} alt="" />
                        <div className='w-100 d-flex align-items-center justify-content-around'>
                            <h4>Name: {b.product.name}</h4>
                            <p>Price: ${b.product.price}</p>
                            <h6>Status: {b.status}</h6>
                            <div onClick={() => deleteBooking(b._id)}>
                                <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>
                    </div>)
                    }</div>}
            </div>
        </div>
    );
};

export default MyBooking;