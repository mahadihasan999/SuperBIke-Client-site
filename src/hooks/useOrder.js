import { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://fierce-reef-43789.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data.orders))

    }, [orders])
    return [orders, setOrders]
}

export default useOrder
