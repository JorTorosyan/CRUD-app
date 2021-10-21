import React, {useState} from 'react';
// import {useDispatch} from "react-redux";
// import {createUsersReducer} from "../../redux/global.slice";

//Generated ID
import {uuid} from "uuidv4";
import api from '../../api/config'
import {useHistory} from "react-router-dom";


const CreateUsers = () => {
    // const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };
    const createUser = async () => {
        const data = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            age: state.age,
            password: state.password,
            confirmPassword: state.confirmPassword
        }
        const request = {
             id : uuid(),
                ...data
        }
        const response = await api.post('/users',request);


        console.log('rrrrrrrrrrrrr',response);

        if(response.data) {
            history.push('/users');
        }
        // dispatch(createUsersReducer(data))
    }

    return (
        <div>
            <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="age"
                value={state.age}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
            />
            <input
                type="password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleChange}
            />
            <button onClick={ () => createUser() }>Create User</button>
        </div>
    );
}

export default CreateUsers;