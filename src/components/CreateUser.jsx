import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/usersReducer.js';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(addUser(data));
        navigate('/');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Имя</label>
            <input {...register('name', { required: true })} />
            <label>Email</label>
            <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            <label>Возраст</label>
            <input type="number" {...register('age', { required: true })} />
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default CreateUser;