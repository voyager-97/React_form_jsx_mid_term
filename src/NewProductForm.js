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
        console.log('Image:', image);

        setName('');
        setDescription('');
        setCategory('');
        setQuantity('');
        setPrice('');
        setImage(null);

    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div>
            <h2>New Product</h2>
            <button type="button" onClick={(event) => {
                    event.preventDefault();
                    document.getElementById("fileInput1").click();

                  }}>UPLOAD LOGO +</button>
                <input  id="fileInput1" type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
            
            {image && <p>{image.name}</p>}
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
            <button onClick={() => { setName(''); setDescription('');  setCategory(''); setQuantity(''); setPrice('');setImage(null); }}>CANCEL</button>
        </div>
    );
}

export default NewProductForm;
