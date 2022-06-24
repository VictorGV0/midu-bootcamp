import { useEffect, useState } from "react"
import { GetGif } from "../services/Global"


export function useGifs( {keyword} ){
const [gifs,setGif]= useState([])
const [loading, setLoading]= useState(false)

    useEffect(function(){
        setLoading(true)
        //read localstorage
        const keywordToUse = keyword || localStorage.getItem("lastKeyword")

        GetGif({keyword : keywordToUse})
        .then(gifs => {
            setGif(gifs)
            setLoading(false)
            localStorage.setItem("lastKeyword", keyword)
               
        })
    },[keyword])
    return {loading, gifs}
}