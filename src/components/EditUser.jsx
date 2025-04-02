import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, fetchUsers } from '../Redux/usersReducer.js';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const { register, handleSubmit, setValue } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.users.users.find(user => user.id === id));
    useEffect(() => {
        if (!user) {
            dispatch(fetchUsers());
        } else {
            setValue('name', user.name);
            setValue('email', user.email);
            setValue('age', user.age);
        }
    }, [user, dispatch, setValue]);

    const onSubmit = (data) => {
        dispatch(updateUser({ id, ...data }));
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

export default EditUser;