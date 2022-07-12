import { useState } from 'react';
import { useLocation } from 'wouter';
import "components/Giphy.css"
import { useGifs } from 'hooks/useGifs';
import { Lazytrending } from 'components/TrendingSearches';
import { ListOfGifs } from 'components/ListOfGifs';


export function Gif(){

const [load, setLoad] =useState(false)
const [keyword, setKeyword] = useState("")
const [path, setPath] = useLocation()

const {gifs} = useGifs({keyword})
const key = localStorage.getItem('lastKeyword')

    function handleSubmit (e){
        e.preventDefault()
        setPath(`/search/${keyword}`)
        setLoad(false)
        setKeyword("")
    }

    function handleChange(e){
        setKeyword(e.target.value)
        

    }

   

    return (
        <div className='gif_body'>
            <img src="logo_giphy.png" className="logo_giphy" alt="logo" />

            
            <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={handleChange} value={keyword} placeholder="busca tu gif aqui" required/>
                    <button>Buscar</button>
            </form>

            <section className='gif_app'>
            <div className='main_gif'>
                    <h3>Ultima Busqueda: "{decodeURI(key)}"</h3>
                    <ListOfGifs gifs={gifs}/>
                </div>


                <div className='gif_links'>
                    <Lazytrending/>
                </div>
            </section>
           
           

           
            
            
            

        </div>
    )
}