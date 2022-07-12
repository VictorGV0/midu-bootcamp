const { APIKEY, APIURL } = require("./gifSettings");


export const GetGif = ({limit = 25, keyword = 'morty', page = 0})=>{
    const ApiURL = `${APIURL}/gifs/search?api_key=${APIKEY}=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`
    return fetch(ApiURL)
            .then(res=> res.json())
            .then(response =>{
                const {data} = response
                const gif =data.map(image => {
                  const {images, title, id} =image
                  const {url} = images.preview_webp
                  const gifFULL = images.downsized_medium.url
                  return {title, id, url, gifFULL}
                })
    
                return gif
                
      })
    };