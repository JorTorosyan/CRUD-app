import React, {useState} from 'react';
import api from '../../api/config'
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import {Form, Formik} from "formik";
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

const EditUsers = () => {
    const history = useHistory();
    const userData = history?.location?.state?.item;

    const editUser = async (state) => {
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
            <Formik
                initialValues={{
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    email: userData.email,
                    age: userData.age,
                    password: userData.password,
                    confirmPassword: userData.confirmPassword
                }}
                validationSchema={Validation}
                onSubmit={ (value) => editUser(value)}
            >
                {value =>
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
                            <button className="create_button" type="submit">Edit</button>
                        </Form>
                    </div>
                }
            </Formik>
        </div>
    );
}

export default EditUsers;