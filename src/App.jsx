

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/edit/:id" element={<EditUser />} />
                <Route path="/user/:id" element={<ViewUser />} />
            </Routes>
        </Router>
    );
}

export default App;