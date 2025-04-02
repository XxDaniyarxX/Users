import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from "../Redux/usersReducer.js";
import { useParams } from 'react-router-dom';
import './styles/ViewUser.css'; 

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
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="user-details">
            <h1 className="user-details__title">Детальная информация о пользователе</h1>
            <div className="user-details__info">
                <p><strong>Имя:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.Email}</p>
                <p><strong>Возраст:</strong> {user.age}</p>
            </div>
        </div>
    );
};

export default ViewUser;