import React, {useState} from 'react';
import api from '../../api/config'
import {useHistory} from "react-router-dom";


const EditUsers = () => {
    const history = useHistory();
    const userData = history?.location?.state?.item;

    const [state, setState] = useState({
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        email: userData?.email,
        age: userData?.age,
        password: userData?.password,
        confirmPassword: userData?.password,
    });
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };
    const editUser = async () => {
        const data = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            age: state.age,
            password: state.password,
            confirmPassword: state.confirmPassword
        }
        const request = {
            ...data
        }
        const response = await api.put(`/users/${userData.id}`,request);

        if(response.data) {
            history.push('/users');
        }
    }

    return (
        <div className="form">
            <h3>Edit a User</h3>
            <div>
                <label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={state.firstName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={state.lastName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="age"
                        placeholder="Agg"
                        value={state.age}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Type a password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Repeat password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button className="create_button" onClick={ () => editUser() }>Edit</button>
        </div>
    );
}

export default EditUsers;