import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Table from "../../components/table";
import api from "../../api/config";
import {useDispatch} from "react-redux";
import {allUsersReducer} from "../../redux/global.slice";

const Users = () => {
    const [users,setUsers] = useState([])
    const history = useHistory();
    const dispatch = useDispatch();

    const getUser = async () => {
        const response = await api.get("/users");
        console.log("response",response);
        setUsers(response.data);
        dispatch(allUsersReducer(response.data));

        return response.data;
    }
    useEffect(() => {

        getUser();

    },[]);
    console.log(users);
    const createUser = () => {
        history.push('/users/create');
    }
    return (
        <div className="users">
            <div className="table">
                <Table column1='First Name' column2='Last Name' column3='Age' column4='Email' column5='Password' data={users}/>
            </div>
            <button className="create_button" onClick={ () => createUser() }>Create User</button>
        </div>
    );
}

export default Users;