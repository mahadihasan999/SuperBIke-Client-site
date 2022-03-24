import React, { useState } from 'react';
import Button from '../../components/Form/Button';
import Label from '../../components/Form/Label';
import TextField from '../../components/Form/TextField';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const AddProductForm = () => {
    const [name, setname] = useState('');
    const [descritption, setdescritption] = useState('');
    const [image, setimage] = useState(null);
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault();

        if (!image) {
            return;
        }

        if (image.size > 1e09) {
            window.alert("Please upload a file smaller than 50 KB");
            return false;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('descritption', descritption);
        formData.append('image', image);
        formData.append('price', price);
        formData.append('rating', rating);

        fetch('https://fierce-reef-43789.herokuapp.com/products', {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Bike Added!", "Bike have been added to the database!", "success");
                    history.push('/dashboard');
                    // window.location.reload(true);

                } else {
                    swal("Unsuccessful !", "bike  not added to the database!", "error");
                }
            })
    }
    return (
        <>
            { }

            <form className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 " onSubmit={handleSubmit}>
                {/* name and descritption  */}

                <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" text="Bike Name" />
                    <TextField
                        id="name"
                        type="text"
                        onChange={e => setname(e.target.value)}
                        required />

                    {/* descritption  */}
                    <Label htmlFor="descritption" text="descritption" />
                    <textarea
                        id="descritption"
                        cols="30" rows="4"
                        className="border border-gray-200 rounded-lg py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
                        required
                        onChange={e => setdescritption(e.target.value)}
                    >
                    </textarea>

                </div>


                <div className="flex flex-col space-y-2">

                    <Label htmlFor="price" text="Price" />
                    <TextField
                        id="price"
                        type="text"
                        onChange={e => setPrice(e.target.value)}
                        required />

                    <Label htmlFor="rating " text="Rating" />
                    <TextField
                        id="price"
                        type="text"
                        onChange={e => setRating(e.target.value)}
                        required />

                    <div className='pt-5'>
                        <Label htmlFor="image" text=" [500x350] [Maximum file size 50KB] " />
                        <a href="https://imagecompressor.11zon.com/en/image-compressor/compress-jpeg-to-100kb.php" target="_blank" rel="noopener noreferrer"> <br /> <span className=' font-sm underline text-gray-400'>Reduce image size click here</span> </a>
                    </div>

                    <input
                        accept="image/*"
                        type="file"
                        onChange={e => setimage(e.target.files[0])}
                    />

                    <div className="mt-8">
                        <Button text="Post" type="submit" />
                    </div>
                </div>
            </form>


        </>
    );
};

export default AddProductForm;