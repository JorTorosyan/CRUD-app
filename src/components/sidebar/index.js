import React from 'react';
import {useHistory} from "react-router-dom";

const Sidebar = () => {
    const history = useHistory();
    const usersPage = () => {
        history.push('/users');
    }
    const homesPage = () => {
        history.push('/homes');
    }

    return (
        <div className="sidebar">
            <button onClick={ () => usersPage() }>Users</button>
            <button onClick={ () => homesPage() }>Homes</button>
        </div>
    );
}

export default Sidebar;