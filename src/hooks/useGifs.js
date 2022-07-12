import {useContext, useEffect, useState} from 'react'
import GifsContext from "context/GifsContext"
import { GetGif } from "services/getGifs"

const INITIAL_PAGE= 0

export function useGifs ({ keyword } = { keyword: null }) {

const [loading, setLoading]= useState(false)
const [loadingNextPage, setLoadingNextPage]= useState(false)

const [page, setPage] = useState(INITIAL_PAGE)
const {gifs, setGif}= useContext(GifsContext)

//read localstorage
const keywordToUse = (keyword || localStorage.getItem('lastKeyword') || 'random')

    useEffect(function(){
        console.log( keywordToUse)
        setLoading(true)
        GetGif({keyword : keywordToUse})
        .then(gifs => {
            setGif(gifs)
            setLoading(false)
            localStorage.setItem('lastKeyword', keywordToUse)
               
        })
    },[keyword, keywordToUse, setGif])

    useEffect(function(){
        if(page ===INITIAL_PAGE) return
        setLoadingNextPage(true)
        
        GetGif({ keyword: keywordToUse, page})
            .then(nextPage => {
                setGif(prevPage => prevPage.concat(nextPage))
                setLoadingNextPage(false)
            })

    },[keywordToUse, page, setGif])


    return {loading, loadingNextPage, gifs, setPage}

}

    