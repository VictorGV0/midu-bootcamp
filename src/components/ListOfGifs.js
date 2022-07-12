import Giphy from "./Giphy";
import 'style.scss';
export function ListOfGifs({gifs}){
    return (
        <>
        {gifs.map(({ id, title, url }) =>
        <Giphy
            key={id}
            title={title}
            url={url}
            id={id} />)}
        </>
    )
}