import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data.reviews))

    }, [review])
    return [review, setReview]
}

export default useReview
