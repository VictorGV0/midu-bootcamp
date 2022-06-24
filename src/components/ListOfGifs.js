import Giphy from "./Giphy";
import '../../src/style.scss';
export function ListOfGifs({gifs}){
    return (
        
            <div className="Gif-App">
        {gifs.map(({ id, title, url }) =>
        <Giphy
            key={id}
            title={title}
            url={url}
            id={id} />)}
        </div>
        
    )
}