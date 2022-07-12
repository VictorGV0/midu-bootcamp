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



