import React from 'react';
import './Giphy.css'

const Giphy=({title, id, url})=>{
    return (
        <div className='Gif-content'>
            <h4>{title}</h4>
            <small>{id}</small>
            <img alt={title} src={url} />
        </div>
    );
}
export default Giphy;

