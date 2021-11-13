import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://aqueous-thicket-07877.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data.reviews))

    }, [review])
    return [review, setReview]
}

export default useReview
