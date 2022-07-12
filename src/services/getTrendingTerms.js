const { APIKEY, APIURL } = require("./gifSettings");

export const getTrendingTerms = ()=>{
const URL = `${APIURL}/trending/searches?api_key=${APIKEY}`
return fetch(URL)
        .then(res=> res.json())
        .then(response =>{
            const {data =[]} = response

            return data
            
  })
};