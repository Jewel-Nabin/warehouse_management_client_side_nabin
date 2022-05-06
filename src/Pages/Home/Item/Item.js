import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {

    const { _id, name, img, description, price, quantity, supplier_name } = item;
    const navigate = useNavigate();

    const navigateToitemDetail = id => {
        navigate(`/item/${id}`);
    };

    return (
        <div className='item'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p className='fw-bold'>Price: {price}</p>
            <p><small>{description}</small></p>
            <p>Quantity: {quantity}</p>
            <p className='fw-bolder'><small>by</small> {supplier_name}</p>
            <button onClick={() => navigateToitemDetail(_id)} className='btn btn-primary'>UPDATE</button>
        </div>
    );
};

export default Item;