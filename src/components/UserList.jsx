import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../Redux/usersReducer';
import { Link } from 'react-router-dom';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };
    console.log(users);
    if (status === 'succeeded') {
        return <div>Загрузка.......</div>;
    }

    return (
        <div className="container mx-auto p-4" style={{width: '1300px', margin: "0 auto"}}>
            <h1 className="text-2xl font-bold mb-4">Список пользователей</h1>
            <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">Добавить пользователя</Link>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 border-b">Имя</th>
                        <th className="px-4 py-2 border-b">Email</th>
                        <th className="px-4 py-2 border-b ">Возраст</th>
                        <th className="px-4 py-2 border-b">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="px-4 py-2 border-b" style={{textAlign: "center"}}>{user.name}</td>
                            <td className="px-4 py-2 border-b" style={{textAlign: "center"}}>{user.Email}</td>
                            <td className="px-4 py-2 border-b" style={{textAlign: "center"}}>{user.age}</td>
                            <td className="px-4 py-2 border-b" style={{textAlign: 'center'}}>
                                <Link to={`/edit/${user.id}`} className="text-blue-500 hover:underline mr-2">Редактировать</Link>
                                <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:underline mr-2">Удалить</button>
                                <Link to={`/user/${user.id}`} className="text-green-500 hover:underline">Просмотр</Link>
                            </td>
                        </tr>   
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;