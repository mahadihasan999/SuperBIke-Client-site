import { useEffect, useState } from 'react';

const useFetch = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, [products])
    return [products, setProducts]
}

export default useFetch
