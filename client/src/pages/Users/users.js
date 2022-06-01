import { useEffect, useState } from "react";
import Axios from "axios";
import './users.css'

import UsersTableRow from "./UsersTableRow";



const Users = (props) => {

    const [users, setUsersList] = useState([]);

    useEffect(()=>{
        fetchUsers()
    }, [])

    async function fetchUsers(){
		const { data } = await Axios.get('http://localhost:3001/users');
		setUsersList(data);
	}

	async function deleteUser(user_id){
		await Axios.delete(`http://localhost:3001/users/delete/${user_id}`)
		fetchUsers()
	}


    return(
        <div className="page_wrapper">
            <div className="users-topbar">
				<h1>USERS</h1>
				<p className='customer-hint'>Look! There are all users that are created.</p>
				<p className='customer-hint'>There you can manipulate with them and get good access about everything you should know about your users</p>
			</div>

            <div className='users-page_body'>
				<div className='users-table'>
					<table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Full Name</th>
								<th>Email</th>
								<th>Role</th>
								<th>Assigned Task</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{users.map(rowUserData => <UsersTableRow rowUserData={rowUserData} key={rowUserData.id} onDeleteUser={deleteUser} />)}
						</tbody>
					</table>
				</div>
			</div>
        </div>
    )
}


export default Users;