import React, {useState} from 'react';
import {uuid} from "uuidv4";
import api from '../../api/config'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const CreateHomes = () => {
    const history = useHistory();
    const allUsers = useSelector(state => state.global.users);

    const [state, setState] = useState({
        owner: '',
        title: '',
        location: '',
        land: '',
        place: '',
        bedroom: '',
    });
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };
    const createHome = async () => {
        const data = {
            owner: state.owner,
            title: state.title,
            location: state.location,
            land: state.land,
            place: state.place,
            bedroom: state.bedroom,
        }
        const request = {
            id : uuid(),
            ...data
        }
        const response = await api.post('/homes',request);

        if(response.data) {
            history.push('/homes');
        }
        // dispatch(createUsersReducer(data))
    }
    return (
        <div className="form">
            <h3>Create Home</h3>
            <div>
                <label>
                    <select name="owner" onChange={handleChange}>
                        <option value="">Select Owner</option>
                        {allUsers.map(user =>
                            <option value={user.firstName} key={user.id}>{user.firstName}</option>
                        )}
                    </select>
                </label>
                <label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={state.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={state.location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="land"
                        placeholder="Land"
                        value={state.land}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="place"
                        placeholder="Place"
                        value={state.place}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="bedroom"
                        placeholder="Bedrooms"
                        value={state.bedroom}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <button className="create_button" onClick={ () => createHome() }>Create</button>
        </div>
    );
}

export default CreateHomes;