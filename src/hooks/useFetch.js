import { useEffect, useState } from 'react';

const useFetch = () => {
    const [location, setLocation] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/location')
            .then(res => res.json())
            .then(data => setLocation(data.location))

    }, [location])
    return [location, setLocation]
}

export default useFetch
