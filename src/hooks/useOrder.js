import { useEffect, useState } from 'react';

const useOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('https://aqueous-thicket-07877.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data.orders))

    }, [orders])
    return [orders, setOrders]
}

export default useOrder
