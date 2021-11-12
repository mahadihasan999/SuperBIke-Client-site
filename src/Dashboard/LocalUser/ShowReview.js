import React from 'react'
import Heading from '../Admin/Heading'
import AddReview from './AddReview'


const ShowReview = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Add Review" />

            {/* form  */}
            <div>
                <AddReview />
            </div>
        </section>
    )
}

export default ShowReview
