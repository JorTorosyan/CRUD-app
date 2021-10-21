import React, {useEffect} from 'react';
import api from "../../api/config";
import {useSelector} from "react-redux";

const Homes = () => {
    const allUsers = useSelector(state => state.global.users);
    console.log(allUsers);
    const getHomes = async () => {
        const response = await api.get("/homes");
        console.log("response",response);
        return response.data;
    }
    useEffect(() => {

        getHomes();

    },[]);
    return (
        <div>

        </div>
    );
}

export default Homes;