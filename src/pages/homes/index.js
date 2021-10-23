import React, {useEffect, useState} from 'react';
import api from "../../api/config";
import Table from "../../components/table";
import {useHistory} from "react-router-dom";

const Homes = () => {
    const [homes,setHomes] = useState([]);
    const history = useHistory();
    const getHomes = async () => {
        const response = await api.get("/homes");
        setHomes(response.data);
        return response.data;
    }
    useEffect(() => {
        getHomes();
    },[]);

    const createHome = () => {
        history.push('/home/create');
    }

    return (
        <div className="homes">
            <div className="table">
                <Table column0='Owner' column1='Title' column2='Location' column3='Land' column4='Place' column5='Bedrooms' data={homes} getHomes={getHomes}/>
            </div>
            <button className="create_button" onClick={ () => createHome() }>Create Home</button>
        </div>
    );
}

export default Homes;