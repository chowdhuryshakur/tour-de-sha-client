import React from 'react';
import { Facebook, Twitter, Youtube, Linkedin } from 'react-feather';
import google from '../../../img/google-round.png';
import insta from '../../../img/instagram 1.png';
import linked from '../../../img/linked.png';
import tw from '../../../img/twitter 1.png';
import fb from '../../../img/facebook 1.png';
import './footer.css';

const Footer = () => {

    const footerStyle = {
        height : '150px',
        backgroundColor: 'orange'
    }

    return (
        <div  style = {footerStyle} className="d-flex flex-column justify-content-center align-items-center">
            <p className='footer text-white fw-bold fs-3'>TOUR DE SHA</p>
            <p className='footer text-white fw-bold fs-5'>Follow us</p>
            <div>
                <img style={{ width:'25px', marginRight:'10px' }} src={fb} alt="" />
                <img style={{ width:'25px', marginRight:'10px' }} src={insta} alt="" />
                <img style={{ width:'25px', marginRight:'10px' }} src={linked} alt="" />
                <img style={{ width:'25px', marginRight:'10px' }} src={google} alt="" />
                <img style={{ width:'25px'}} src={tw} alt="" />
            </div>/
        </div>
    );
};

export default Footer;