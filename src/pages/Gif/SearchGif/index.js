import React from 'react';
import { ListOfGifs } from 'components/ListOfGifs';
import { useGifs } from 'hooks/useGifs';


export const SearchGif=({ params })=>{
    const { keyword } = params
    const {loading, gifs, setPage} = useGifs({keyword})


    const handlePage= ()=>setPage(prevPage => prevPage + 1)


    return (
      <>
        {keyword ? <h3>{decodeURI(keyword)}</h3>
        : ""}
          
      <ListOfGifs gifs={gifs}/>
      <br/>
      <button onClick={handlePage}>Next Page</button>

      </>
    )
                    
    }
    
