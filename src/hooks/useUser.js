import { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://aqueous-thicket-07877.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))

    }, [users])
    return [users, setUsers]
}

export default useUser;
