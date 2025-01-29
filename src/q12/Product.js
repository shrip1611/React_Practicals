import React, { useState } from 'react'

const Product = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [fruits, setFruits] = useState([
        { name: 'Apple', price: 130, inStock: true },
        { name: 'Banana', price: 90, inStock: false },
        { name: 'Cherry', price: 200, inStock: true },
    ]);
    const [vegetables, setVegetables] = useState([
        { name: 'Carrot', price: 110, inStock: true },
        { name: 'Potato', price: 75, inStock: false },
        { name: 'Tomato', price: 140, inStock: true },
    ]);

    const filteredFruits = fruits.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredVegetables = vegetables.filter((vegetable) =>
        vegetable.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1>Fruits and Vegetables List</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search"
            />
            <h2>Fruits</h2>
            <ul >
                {filteredFruits.map(({ name, price, inStock }) => (
                    <li className='fruit'>
                        <span>{name}</span>
                        <span>{price} .Rs</span>
                        <p className={inStock ? 'in-stock' : 'out-of-stock'}>
                            {inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                    </li>
                ))}

            </ul>
            <h2>Vegetables</h2>
            <ul>
                {filteredVegetables.map(({ name, price, inStock }) => (
                    <li className='vegetable'>
                        <span>{name}</span>
                        <span>{price} .Rs</span>
                        <p className={inStock ? 'in-stock' : 'out-of-stock'}>
                            {inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Product