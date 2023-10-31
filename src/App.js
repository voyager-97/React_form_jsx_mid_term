import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import NewShopForm from './NewShopForm';
import NewProductForm from './NewProductForm';

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
