import React from 'react'
import AddSpotForm from './AddSpotForm'
import Heading from './Heading'

const AddTourismDisplay = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Add New Spot" />

            {/* form  */}
            <div>
                <AddSpotForm />
            </div>
        </section>
    )
}

export default AddTourismDisplay
