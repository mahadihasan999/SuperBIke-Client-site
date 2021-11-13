import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import Button from '../../components/Form/Button';
import Label from '../../components/Form/Label';
import TextField from '../../components/Form/TextField';

const AddReview = () => {
    const [customerName, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setStar] = useState('')
    const history = useHistory()

    // const products = useFetch()


    //post to database ,
    const handleSubmit = e => {
        e.preventDefault()
        const newReview = { customerName, description, rating }

        //POST 
        fetch("https://aqueous-thicket-07877.herokuapp.com/review", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        }).then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Review Added!", "Wanna see Go to Home Page!", "success");
                    history.push('/');
                } else {
                    swal("Unsuccessful !", "Review is not added to the database!", "error");
                }
            })
    }

    return (
        <>

            <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6" onSubmit={handleSubmit}>
                {/* title and description  */}
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="name" text="Customer name" />
                    <TextField
                        id="title"
                        type="text"
                        value={customerName}
                        onChange={e => setTitle(e.target.value)}
                        required />

                    {/* rating  */}
                    <Label htmlFor="star" text="Rating" />
                    <TextField
                        id="star"
                        type="text"
                        value={rating}
                        onChange={e => setStar(e.target.value)} required />

                </div>

                <div className="flex flex-col space-y-4">
                    {/* description  */}
                    <Label htmlFor="description" text="Write Your Feedback" />
                    <textarea
                        id="description"
                        cols="25" rows="5"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>
                    {/* button  */}
                    <div className="mt-2">
                        <Button text="Submit Review" type="submit" />
                    </div>
                </div>

            </form>
        </>
    )
}

export default AddReview
