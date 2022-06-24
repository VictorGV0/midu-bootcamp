export function Detail ({params}){
    console.log(params.id)
    return (
        <h1>Gif con ID {params.id}</h1>
    )
}