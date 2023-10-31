import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewShopForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('Form submitted with Name:', name, 'and Description:', description);
        console.log('Image:', image);
        // Logic to save form data (if needed)
        
        // Clear all fields after submission
        setName('');
        setDescription('');
        setImage(null);

      
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div>
            <h2>New Shop</h2>
            <label>
                <button type="button" onClick={(event) => {
                    event.preventDefault();
                    document.getElementById("fileInput").click();

                  }}>UPLOAD LOGO +</button>
                <input id="fileInput" type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
            </label>
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
            <button onClick={handleSubmit}>SUBMIT</button>
            <button onClick={() => { setName(''); setDescription(''); setImage(null); }}>CANCEL</button>
        </div>
    );
}

export default NewShopForm;
