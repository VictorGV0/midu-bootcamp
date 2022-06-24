import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import "../../components/Giphy.css"
import { useGifs } from '../../hooks/useGifs';
import { SearchGif } from './SearchGif';

const POPULAR_GIFS = ["Ecuador", "Chica Araña", "Toldo", "Ukrania", "Colombia", "Spain"]

export function Gif(){

const [load, setLoad] =useState(false)
const [keyword, setKeyword] = useState("")
const [path, setPath] = useLocation()

const {loading,gifs} = useGifs({keyword})

    function handleSubmit (e){
        e.preventDefault()
        setPath(`/gif/${keyword}`)
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
                    <input type="text" className="form-control" onChange={handleChange} value={keyword} placeholder="busca tu gif aqui"/>
                    <button>Buscar</button>
            </form>
            <h3>Ultima Busqueda</h3>
            <SearchGif params={gifs}/>
           <div className='Gif_links'>
           <h2>Los Gifs Mas Populares</h2>
                <ul className="list-group">
                    {POPULAR_GIFS.map((populargifs => (
                        <li key={populargifs} >
                            <Link to={`/gif/${populargifs}`}>{populargifs}</Link>
                        </li>
                    )))}         
                </ul>
           </div>

           
            
            
            

        </div>
    )
}