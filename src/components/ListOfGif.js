import React, { useEffect, useState } from 'react';
import Giphy from './Giphy.js';
import { GetGif } from '../services/Global';

export const ListOfGif=({ keyword })=>{
    const [gifs,setGif]= useState([])

    useEffect(function(){
        GetGif({keyword})
        .then(gif => setGif(gif) )
                 
    },[keyword])

    return gifs.map(({id,title,url}) =>
                        <Giphy
                            key={id}
                            title={title}
                            url={url}
                            id={id} />

                    )
    }
    
