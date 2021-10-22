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
            <ul>
                <li>
                    <button onClick={ () => usersPage() }>Users</button>
                </li>
                <li>
                    <button onClick={ () => homesPage() }>Homes</button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;