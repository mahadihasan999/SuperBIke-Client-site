import React from 'react'
import EditSpotForm from './EditSpotForm'
import Heading from './Heading'

const EditTourismDisplay = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Update Spot" />
            {/* form  */}
            <EditSpotForm />
        </section>
    )
}

export default EditTourismDisplay
