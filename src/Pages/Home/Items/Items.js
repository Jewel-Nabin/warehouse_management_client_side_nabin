import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Item from '../Item/Item';
import './Items.css';


const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div id="items" className='container'>
            <PageTitle title={"Inventory"}></PageTitle>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Products</h1>
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;