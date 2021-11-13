import React from 'react'
import UpdateProductForm from './UpdateProductForm'
import Heading from './Heading'

const UpdateProduct = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Update " />
            {/* form  */}
            <UpdateProductForm />
        </section>
    )
}

export default UpdateProduct
