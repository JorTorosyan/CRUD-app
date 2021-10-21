import React from 'react';

const Table = ({column1, column2, column3, column4, column5, data}) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {column1 &&  <th>{column1}</th> }
                        {column2 &&  <th>{column2}</th> }
                        {column3 &&  <th>{column3}</th> }
                        {column4 &&  <th>{column4}</th> }
                        {column5 &&  <th>{column5}</th> }
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
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;