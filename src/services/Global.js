import axios from "axios";
import { createContext } from "react";

export const GetData =async ()=>{
    const response = await axios
    .get("http://127.0.0.1:8000/api/post");
  const { data } = response;
  return data;

}

export const PostData =async (data)=>{
  const response = await axios.post("http://127.0.0.1:8000/api/post", data);
  const { data: data_1 } = response;
  return data_1;

}
export const EditData =async (id,data)=>{
  const response = await axios.put(`http://127.0.0.1:8000/api/post/${id}`, data);
  const { data: data_1 } = response;
  return data_1;

}
export const DelData =async (id)=>{
  const response = await axios.delete(`http://127.0.0.1:8000/api/post/${id}`);
  const { data } = response;
  return data;

}

export const LoadContext = createContext(null)

const APIKEY = 'Lj8RZqne279PvDF3VV7M144kIhptULkZ&q'

export const GetGif = ({keyword})=>{
const ApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}=${keyword}&limit=25&offset=0&rating=g&lang=en`
return fetch(ApiURL)
        .then(res=> res.json())
        .then(response =>{
            const {data} = response
            const gif =data.map(image => {
              const {images, title, id} =image
              const {url} = images.downsized_medium
              return {title, id, url}
            })

            return gif
            
  })
};


