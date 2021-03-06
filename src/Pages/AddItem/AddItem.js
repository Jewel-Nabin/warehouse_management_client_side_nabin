import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://mysterious-fortress-67873.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div style={{ background: '#FBF8F1', padding: '100px'}} className='w-50 mx-auto'>
            <h2>Please add a item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-style' type="submit" value="Add item" />
                <ToastContainer/>
            </form>
        </div>
    );
};

export default AddItem;