import React, { useEffect } from 'react';
import { useState } from 'react';
import './Giphy.css'
import { GetGif } from './Global';


export const Giphy=()=>{
    const [gifs,setGif]= useState([])

    useEffect(function(){
        console.log("DONE!")
        GetGif({keyword:'ouch'}).then(gif => setGif(gif) )
                 
    },[])

    return (
        <div className='App'>
            <section className='App-content'>
                {
                gifs.map(singleGif => {
                    return <div className='App'>
                    <h4>{singleGif.title}</h4>
                    <small>{singleGif.id}</small>
                    <img alt={singleGif.title} src={singleGif.url} />
                    </div>
                }
                )}    
                         
            </section>
        </div>
    );
}


