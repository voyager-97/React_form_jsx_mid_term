import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function NewShopForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = () => {
        console.log('Form submitted with Name:', name, 'and Description:', description);
    };
    return (
        <div>
            <h2>New Shop</h2>
            <button>UPLOAD LOGO +</button>
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

function NewProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const handleSubmit = () => {
        console.log('Form submitted with values:', { name, description, category, quantity, price });
    };
    return (
        <div>
            <h2>New Product</h2>
            <button>UPLOAD PHOTO +</button>
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

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/shop-form">New Shop Form</Link>
                        </li>
                        <li>
                            <Link to="/product-form">New Product Form</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/shop-form" element={<NewShopForm />} />
                    <Route path="/product-form" element={<NewProductForm />} />
                    <Route path="/" element={<div>Select a form from the navigation.</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
