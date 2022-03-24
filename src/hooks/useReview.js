import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://fierce-reef-43789.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data.reviews))

    }, [review])
    return [review, setReview]
}

export default useReview
