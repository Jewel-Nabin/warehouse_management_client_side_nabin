import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Item from '../Item/Item';
import './Items.css';


const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-fortress-67873.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div id="items" className='container'>
            <PageTitle title={"Inventory"}></PageTitle>
            <div className="row">
                <h2 className='text-center mt-1 mb-2' style={{ color: 'gray' }}>Our Inventories</h2>
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