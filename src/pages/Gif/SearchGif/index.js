import React from 'react';
import { ListOfGifs } from '../../../components/ListOfGifs';
import { useGifs } from '../../../hooks/useGifs';


export const SearchGif=({ params })=>{
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})
console.log(loading)

    return (
      <>
      <ListOfGifs gifs={gifs}/>
      </>
        
    )
                    
    }
    
