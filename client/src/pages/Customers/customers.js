
import TableRow from './customersTable';
import CreateCustomerModal from './createCustomerModal';
import EditCustomerModal from './editCustomerModal';
import './customers.css'
import { useState, useEffect } from 'react';
import Axios from "axios";


const Customers = (props) => {

	const [customers, setCustomersList] = useState([])

	const [isCreatingUser, setCreatingUser] = useState(false);
	const [isEditingCustomer, setEditingCustomer] = useState(false);
	const [editCustomerData, setCustomerData] = useState({});

	useEffect(() => {
		fetchCustomers();
	}, []) // fetch customers every single time when page is refreshed

	async function fetchCustomers(){
		const { data } = await Axios.get('http://localhost:3001/customers');
		setCustomersList(data);
	}
	
	async function deleteCustomer(customerId){
		await Axios.delete(`http://localhost:3001/customer/delete/${customerId}`)
		fetchCustomers()
	}
	
	async function updateCustomer(customerData){
		await Axios.put(`http://localhost:3001/customer/edit/${customerData.id}`, customerData);
		fetchCustomers()
	}

	const createCustomer = async (customerData) => {
		try {
		  await Axios.post('http://localhost:3001/customer/create', customerData);
		} catch (err) {
			// Handle Error Here
			console.error(err);
		}
		fetchCustomers();
	};

	// HANDLING MODAL FUNCTIONS
	const onCustomerEdit = (user_id) =>{
		setEditingCustomer(true)
		console.log(`Edit customer id ${user_id}`)
		setCustomerData(customers.find(customer => customer.id === user_id))
	}
	const openCreateCustomerModal = () =>{
		setCreatingUser(true)
	}
	const closeModal = () =>{
		setCreatingUser(false)
		setEditingCustomer(false)
	}


	return (
		<div className="page_wrapper">
			{isCreatingUser && <CreateCustomerModal onSubmitCustomer={createCustomer} onCloseModal={closeModal}/>} 
			{isEditingCustomer && <EditCustomerModal selectedCustomerData={editCustomerData} onSubmitEdit={updateCustomer} onCloseModal={closeModal}/>} 
			
			<div className="customers-topbar">
				<h1>CUSTOMERS</h1>
				<p className='customer-hint'>Look! There are all customers that you have work with.</p>
				<p className='customer-hint'>Have a new customer? Add it now!</p>
				<div className='add-customerbtn-wrapper'>
					<button className="add-customer-btn" onClick={openCreateCustomerModal}>
						Add Customer
					</button>
				</div>
			</div>

			<div className='customers-page_body'>
				<div className='customers-table'>
					<table>
						<thead>
							<tr>
								{/* <th>ID</th> */}
								<th>Name</th>
								<th>Company</th>
								<th>Email</th>
								<th>Position</th>
								<th>Collaboration</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{customers.map(row => <TableRow row={row} key={row.id} onDelete={deleteCustomer} onUpdate = {onCustomerEdit} />)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}


export default Customers;