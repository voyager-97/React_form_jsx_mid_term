import React, { useState } from 'react';

function NewProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        console.log('Form submitted with values:', { name, description, category, quantity, price });
        // Logic to save form data (if needed)
        // Navigate or do something else after form submission
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <h2>New Product</h2>
            <label>
                UPLOAD PHOTO +
                <input type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
            </label>
            {image && <img src={image} alt="Uploaded preview" width="100" />}
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            ></textarea>
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <button onClick={handleSubmit}>SUBMIT</button>
            <button>CANCEL</button>
        </div>
    );
}

export default NewProductForm;
