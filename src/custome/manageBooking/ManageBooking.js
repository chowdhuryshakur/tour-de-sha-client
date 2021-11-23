import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const ManageBooking = () => {
    const [bookings, setBookings] = useState([]);
    const [isloading, setIsloading] = useState(false)
    const [id, setId] = useState('');
    useEffect(() => {
        setIsloading(true);
        fetch(`https://tourdesha.herokuapp.com/bookings`)
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
    const updateBooking = id => {
        axios.put(`https://tourdesha.herokuapp.com/bookings/${id}`, {
            status: 'complete'
        })
            .then(res => {
                if (res.status === 200) {
                    setId(id)
                    alert('Status changed successfully');
                }
            })
    }
    return (
        <div style={{ minHeight: '66vh' }}>
            <div className='m-3'>
                <h3 style={{ marginLeft: '5%' }}>All Services</h3>
                {isloading ? <div className='d-flex w-100 justify-content-center'>
                    <Spinner animation="border" /></div>
                    : <div>
                        {bookings.map(b => <div style={{ width: '90%', margin: '0 auto', border: '1px solid orange' }} className='d-flex p-2 align-items-center'>
                            <img style={{ width: '10%' }} src={b.product.img} alt="" />
                            <div className='w-100 d-flex align-items-center justify-content-around'>
                                <h4>Name: {b.product.name}</h4>
                                <h6>User: {b.name}</h6>
                                <h6>Email: {b.user_mail}</h6>
                                <h6>Status: {b.status}</h6>
                                <div onClick={() => deleteBooking(b._id)}>
                                    <svg style={{ width: '30px' }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                                <button onClick={() => updateBooking(b._id)} className='button'>Complete</button>
                            </div>
                        </div>)}</div>}
            </div>
        </div>
    );
};

export default ManageBooking;