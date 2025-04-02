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
            setValue('email', user.Email);
            setValue('age', user.age);
        }
    }, [user, dispatch, setValue]);

    const onSubmit = (data) => {
        dispatch(updateUser({ id, ...data }));
        navigate('/');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md" style={{width: '1300px', margin: "0 auto"}}>
            <h2 className="text-2xl font-bold mb-6">Редактировать пользователя</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Имя</label>
                    <input
                        {...register('name', { required: true })}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Возраст</label>
                    <input
                        type="number"
                        {...register('age', { required: true })}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Сохранить
                </button>
            </form>
        </div>
    );
};

export default EditUser;