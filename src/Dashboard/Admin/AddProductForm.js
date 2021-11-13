import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import swal from 'sweetalert';
import Button from '../../components/Form/Button';
import Label from '../../components/Form/Label';
import TextField from '../../components/Form/TextField';


const AddProductForm = () => {
    const [name, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setCost] = useState('')
    const [img, setImg] = useState('')
    const [rating, setStar] = useState('')
    const history = useHistory()



    //post to database 
    const handleSubmit = e => {
        e.preventDefault()
        const newSpot = { name, description, price, img, rating }

        //POST 
        fetch("https://aqueous-thicket-07877.herokuapp.com/products", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        }).then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Spot Added!", "Spot is added to the database!", "success");
                    history.push('/');
                } else {
                    swal("Unsuccessful !", "Spot is not added to the database!", "error");
                }
            })
    }


    return (
        <>

            <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 mt-6" onSubmit={handleSubmit}>
                {/* title and description  */}
                <div className="flex flex-col space-y-4">
                    <Label htmlFor="name" text="Bike Name" />
                    <TextField
                        id="title"
                        type="text"
                        value={name}
                        onChange={e => setTitle(e.target.value)}
                        required />

                    {/* description  */}
                    <Label htmlFor="description" text="Description" />
                    <textarea
                        id="description"
                        cols="30" rows="9"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    >
                    </textarea>

                </div>

                {/* price , image , duration, spotname*/}
                <div className="flex flex-col space-y-4">
                    {/* price  */}
                    <Label htmlFor="cost" text="Price" />
                    <TextField
                        id="Price"
                        type="text"
                        value={price}
                        onChange={e => setCost(e.target.value)}
                        required />
                    {/* image url  */}
                    <Label htmlFor="img" text="Image URL" />
                    <TextField
                        id="image"
                        type="text"
                        value={img}
                        onChange={e => setImg(e.target.value)} required />

                    {/* rating */}
                    <Label htmlFor="star" text="Rating" />
                    <TextField
                        id="star"
                        type="text"
                        value={rating}
                        onChange={e => setStar(e.target.value)} required />

                    {/* button  */}
                    <div className="mt-8">
                        <Button text="Add" type="submit" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddProductForm
