import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function NewShopForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('Form submitted with Name:', name, 'and Description:', description);
        // Logic to save form data (if needed)
        navigate('/product-form');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div>
            <h2>New Shop</h2>
            <label>
                UPLOAD LOGO +
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
            <button onClick={handleSubmit}>SUBMIT</button>
            <button>CANCEL</button>
        </div>
    );
}

export default NewShopForm;
