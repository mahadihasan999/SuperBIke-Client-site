import React from 'react'
import AddProductForm from './AddProductForm'
import Heading from './Heading'

const ShowAddedProduct = () => {
    return (
        <section>
            {/* heading  */}
            <Heading text="Add New Item" />

            {/* form  */}
            <div>
                <AddProductForm />
            </div>
        </section>
    )
}

export default ShowAddedProduct
