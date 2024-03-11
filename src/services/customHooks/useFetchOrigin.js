import { useEffect, useState } from "react";

const useFetchEpisode = (url) => {
  const [episode, setEpisode] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(()=>{
      const fetchData = async () =>{
          try{
            const response = await fetch(url)
          const result = await response.json()
          setEpisode(result)
          }catch (error){setError(error)}
          finally{
            setLoading(false)
          }
      }
      fetchData()
  },[url])

  return {episode, error , loading}
};

export default useFetchEpisode

