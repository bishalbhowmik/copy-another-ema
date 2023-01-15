import React from 'react';
import picture from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header-area'>
                <img src={picture} alt="" />
                <div>
                    <a href="/Order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;