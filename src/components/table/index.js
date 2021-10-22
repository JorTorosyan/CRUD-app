import React from 'react';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png';

const Table = ({column0, column1, column2, column3, column4, column5, data}) => {
    console.log(data)
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
                            <td style={{ display: item.title ? 'table-cell' : 'none' }}>{item.title && (
                                item.owner
                            )}</td>
                            <td>{item.firstName ? item.firstName : item.title}</td>
                            <td>{item.lastName ? item.lastName : item.location}</td>
                            <td>{item.age ? item.age : item.land}</td>
                            <td>{item.email ? item.email : item.place}</td>
                            <td>{item.password ? item.password : item.bedroom}</td>
                            <td className="action">
                                <button>
                                    <img src={DeleteIcon} alt=""/>
                                </button>
                                <button>
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