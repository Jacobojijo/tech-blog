import { useEffect, useState } from "react"

const useFetch = (url) => {
  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    try {
        useEffect(() => {
             fetch(url)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                });

        
        }, [url]);
    } catch (error) {
        console.log(error);
    }

    return {data, loading};
}

export default useFetch