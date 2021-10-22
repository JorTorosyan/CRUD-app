import React, {useState} from 'react';
import api from '../../api/config'
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const EditHomes = () => {
    const history = useHistory();
    const allUsers = useSelector(state => state.global.users);
    const homeData = history?.location?.state?.item;

    const [state, setState] = useState({
        owner: homeData?.owner,
        title: homeData?.title,
        location: homeData?.location,
        land: homeData?.land,
        place: homeData?.homeData,
        bedroom: homeData?.bedroom,
    });
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };
    const editHome = async () => {
        const data = {
            owner: state.owner,
            title: state.title,
            location: state.location,
            land: state.land,
            place: state.place,
            bedroom: state.bedroom,
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
            <div>
                <label>
                    <select name="owner" onChange={handleChange}>
                        <option value={homeData?.owner}>{homeData?.owner}</option>
                        {allUsers && allUsers.map(user =>
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
            <button className="create_button" onClick={ () => editHome() }>Edit</button>
        </div>
    );
}

export default EditHomes;