import React from 'react';
import DeleteIcon from '../../assets/images/delete.png';
import EditIcon from '../../assets/images/edit.png';

const Table = ({column1, column2, column3, column4, column5, data}) => {
    return (
        <div className="table">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <thead>
                    <tr>
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
                            <td>{item.firstName ? item.firstName : ''}</td>
                            <td>{item.lastName ? item.lastName : ''}</td>
                            <td>{item.age ? item.age : ''}</td>
                            <td>{item.email ? item.email : ''}</td>
                            <td>{item.password ? item.password : ''}</td>
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