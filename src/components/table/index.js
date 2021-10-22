import React from 'react';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png';
import api from "../../api/config";
import {useHistory} from "react-router-dom";

const Table = ({column0, column1, column2, column3, column4, column5, data, getUser, getHomes}) => {

    const history = useHistory();
    const location = history.location.pathname.slice(1);

    const deleteUser = async (id) => {
        await api.delete(`/users/${id}`);
        getUser();
    }
    const deleteHome = async (id) => {
        await api.delete(`/homes/${id}`);
        getHomes();
    }

    const editUser = (item) => {
        history.push(`/user/edit/${item.id}`, {item});
    }
    const editHome = (item) => {
        history.push(`/home/edit/${item.id}`, {item});
    }

    return (
        <div className="table">
            <table width="100%">
                <thead>
                    <tr>
                        {column0 &&  <th>{column0}</th> }
                        {column1 &&  <th>{column1}</th> }
                        {column2 &&  <th>{column2}</th> }
                        {column3 &&  <th>{column3}</th> }
                        {column4 &&  <th>{column4}</th> }
                        {column5 &&  <th>{column5}</th> }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr key={item.id}>
                            <td style={{ display: item.owner ? 'table-cell' : 'none' }}>{item.owner && (
                                item.owner
                            )}</td>
                            <td>{item.firstName ? item.firstName : item.title}</td>
                            <td>{item.lastName ? item.lastName : item.location}</td>
                            <td>{item.age ? item.age : item.land}</td>
                            <td>{item.email ? item.email : item.place}</td>
                            <td>{item.password ? item.password : item.bedroom}</td>
                            <td className="action">
                                <button onClick={ location === 'users' ? () => deleteUser(item.id) : () => deleteHome(item.id) }>
                                    <img src={DeleteIcon} alt=""/>
                                </button>
                                <button onClick={ location === 'users' ? () => editUser(item) : () => editHome(item) }>
                                    <img src={EditIcon} alt=""/>
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;