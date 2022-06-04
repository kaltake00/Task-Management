import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri';

function UsersTableRow(props) {
    const userdata = props.rowUserData

    const deleteUser = () =>{
        console.log('Deleting User', userdata.id)
        props.onDeleteUser(userdata.id)
    }
    
    return (
        <tr>
            <td>{userdata.id}</td>
            <td>{userdata.name}</td>
            <td>{userdata.email}</td>
            <td>{userdata.role}</td>
            <td>Task Name no1</td>
            <td>
                <div className="row-actions">
                    <button className='cta-primary-btn' onClick={deleteUser} title='Delete User'><RiDeleteBin6Line /></button>
                    {/* <button onClick={deleteCustomer} className='customer-delete'><RiDeleteBin6Line /></button>
                    <button onClick={updateCustomer} className='customer-edit'><BsPencil /></button> */}
                </div>
            </td>
        </tr>
    )
}

export default UsersTableRow