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
                <Table firstColumn='First Name' secondColumn='Last Name' thirdColumn='Age' fourthColumn='Email' fifthColumn='Password' data={users}/>
            </div>
            <button onClick={ () => createUser() }>create user</button>
        </div>
    );
}

export default Users;