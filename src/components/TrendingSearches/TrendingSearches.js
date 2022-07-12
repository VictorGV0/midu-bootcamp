import { Category } from "components/Category";
import { useEffect, useState } from "react";
import { getTrendingTerms } from "services/getTrendingTerms";


export default function TrendingSearches (){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    }, [])

    return <Category name="Tendencias Giphy" options={trends}/>
}