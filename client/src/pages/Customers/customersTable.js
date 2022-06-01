
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BsPencil} from 'react-icons/bs';
import './customersTable.css'



const TableRow = (props) => {
	const customer = props.row;

	const deleteCustomer = () =>{
		props.onDelete(customer.id)
	}

	const updateCustomer = () =>{
		props.onUpdate(customer.id)
	}

	var collab = '';
	if (customer.collaboration){
		collab = 'Yes';
	}
	else{
		collab = 'No';
	}
	return (
		<tr>
			<td>{customer.name}</td>
			<td>{customer.company_name}</td>
			<td>{customer.email}</td>
			<td>{customer.title}</td>
			<td>{collab}</td>
			<td>
				<div className="row-actions">
					<button onClick={deleteCustomer} className='customer-delete'><RiDeleteBin6Line /></button>
					<button onClick={updateCustomer} className='customer-edit'><BsPencil /></button>
				</div>
			</td>
		</tr>
	);
}

export default TableRow;