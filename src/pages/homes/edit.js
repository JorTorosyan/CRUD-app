import React from 'react';
import api from '../../api/config'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {TextField} from "../../components/input";
import * as Yup from "yup";

const Validation = Yup.object().shape({
    owner: Yup.string()
        .required('Required'),
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    location: Yup.string()
        .required('Required'),
    land: Yup.string()
        .required('Required'),
    place: Yup.string()
        .required('Required'),
    bedroom: Yup.number()
        .required('Required'),
});


const EditHomes = () => {
    const history = useHistory();
    const allUsers = useSelector(state => state.global.users);
    const homeData = history?.location?.state?.item;

    const editHome = async (homeState) => {
        const data = {
            owner: homeState.owner,
            title: homeState.title,
            location: homeState.location,
            land: homeState.land,
            place: homeState.place,
            bedroom: homeState.bedroom,
        }
        const request = {
            ...data
        }
        const response = await api.put(`/homes/${homeData.id}`,request);

        if(response.data) {
            history.push('/homes');
        }
    }
    return (
        <div className="form">
            <h3>Edit Home</h3>
            <Formik
                initialValues={{
                    owner: homeData.owner,
                    title: homeData.title,
                    location: homeData.location,
                    land: homeData.land,
                    place: homeData.place,
                    bedroom: homeData.bedroom
                }}
                validationSchema={Validation}
                onSubmit={ (value) => editHome(value)}
            >
                <div>
                    <Form>
                        <label>
                            <Field as="select" name="owner">
                                <option value="">Select Owner</option>
                                {allUsers && allUsers.map(user =>
                                    <option value={user.firstName} key={user.id}>{user.firstName}</option>
                                )}
                            </Field>
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="title"
                                placeholder="Title"
                            />
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="location"
                                placeholder="Location"
                            />
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="land"
                                placeholder="Land"
                            />
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="place"
                                placeholder="Place"
                            />
                        </label>
                        <label>
                            <TextField
                                type="text"
                                name="bedroom"
                                placeholder="Bedrooms"
                            />
                        </label>
                        <button className="create_button" type="submit">Create</button>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}

export default EditHomes;