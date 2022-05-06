import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {

    const { itemId } = useParams();
    // const [item] = useItemDetalil(itemId);

    return (
        <div>
            {/* <h2>You are about to book: {item.name}</h2> */}
            <div className='text-center'>
                <Link to={`/checkout/${itemId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;