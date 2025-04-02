import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers} from "../Redux/usersReducer.js";
import { useParams } from 'react-router-dom';

const ViewUser = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.users.users.find(user => user.id === id));

    useEffect(() => {
        if (!user) {
            dispatch(fetchUsers());
        }
    }, [user, dispatch]);

    if (!user) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h1>Детальная информация о пользователе</h1>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Возраст: {user.age}</p>
        </div>
    );
};

export default ViewUser;