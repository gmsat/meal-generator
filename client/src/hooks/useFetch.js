import {useEffect, useState} from 'react';

function useFetch(url, fetchOnLoad) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        if (fetchOnLoad) {
            reFetch();
        }
    }, [])

    async function fetchData() {
        setData(null);
        setLoading(true);

        await fetch(`${url}`)
            .then(res => res.json())
            .then(res => {
                console.log(res.data)
                setData(res.data);
                setLoading(null)
                setError(null)
            })
            .catch(e => {
                setError(e);
                setLoading(null)
            })
    }

    const reFetch = () => {
        fetchData().catch(e => console.log(e))
    }

    return {data, loading, error, reFetch};
}

export default useFetch;