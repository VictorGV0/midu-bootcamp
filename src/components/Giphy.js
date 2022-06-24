import React from 'react';
import { Link } from 'wouter';
import './Giphy.css'

const Giphy = ({ title, id, url }) => {
    return <div className='Each_Gif'>
        <Link to={`/detail/${id}`} >
        <img alt={title} className="images" src={url} />
        <h4 className='title'>{title}</h4>

    </Link >
    </div>
}
export default Giphy;

