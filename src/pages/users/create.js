import React from 'react';
// Generated ID
import {uuid} from "uuidv4";
import api from '../../api/config'
import {useHistory} from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {TextField} from "../../components/input";

const Validation = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    age: Yup.string()
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
});


const CreateUsers = () => {
    const history = useHistory();
    const createUser = async (state) => {
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

        if(response.data) {
            history.push('/users');
        }
    }

    return (
        <div className="form">
            <h3>Create a User</h3>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    age: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Validation}
                onSubmit={ (value) => createUser(value)}
            >
                <div>
                    <Form>
                        <label>
                            <TextField
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                            />
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </label>
                        <label>
                            <TextField
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="age"
                                placeholder="Agg"
                            />
                        </label>
                        <label>
                            <TextField
                                type="password"
                                name="password"
                                placeholder="Type a password"
                            />
                        </label>
                        <label>
                            <TextField
                                type="password"
                                name="confirmPassword"
                                placeholder="Repeat password"
                            />
                        </label>
                        <button className="create_button" type="submit">Create</button>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}

export default CreateUsers;