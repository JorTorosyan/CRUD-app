import React, {useState} from 'react';
// import {useDispatch} from "react-redux";
// import {createUsersReducer} from "../../redux/global.slice";

// Generated ID
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
        <div className="form">
            <h3>Create a User</h3>
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
            <button className="create_button" onClick={ () => createUser() }>Create</button>
        </div>
    );
}

export default CreateUsers;