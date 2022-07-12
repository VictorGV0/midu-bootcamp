
import Giphy from "components/Giphy"
import { useGlobalGifs } from "hooks/useGlobalGifs"

export function Detail ({params}){
    const gifs = useGlobalGifs()

    const gif = gifs.find(singleGif => singleGif.id === params.id)

    console.log(gif.gifFULL)
    return (
        <Giphy 
        title={gif.title}
        url={gif.gifFULL}
       />
    )
}