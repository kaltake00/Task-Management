import { useState } from 'react'
import './createCustomerModal.css'


const CreateCustomerModal = (props) => {

	const [enteredName, setEnteredName] = useState('');
	const [enteredCompanyName, setCompanyName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPosition, setEnteredPosition] = useState('CEO');
	const [enteredCollab, setEnteredCollab] = useState('yes');

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	}
	const companyChangeHandler = (event) => {
		setCompanyName(event.target.value);
	}
	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	}
	const positionChangeHandler = (event) => {
		setEnteredPosition(event.target.value);
	}
	const collabChangeHandler = (event) =>{
		const entCollab = event.target.value
		var enteredCollaboration = false
		if (entCollab === 'yes'){
			enteredCollaboration = true;
		} else {
			enteredCollaboration = false;
		}
		setEnteredCollab(enteredCollaboration)
	}

	function onCustomerSubmit(e){
		e.preventDefault();
		const customerData = {
			name: enteredName,
			companyname: enteredCompanyName,
			email: enteredEmail,
			position: enteredPosition,
			collaboration: enteredCollab
		}
		props.onSubmitCustomer(customerData);

		closeModal();
		setEnteredName('');
		setCompanyName('');
		setEnteredEmail('');
		setEnteredPosition('');
	}

	function closeModal(){
		props.onCloseModal()
	}

	return (
		<div className='customer-modal'>
			<div className="backdrop" onClick={closeModal}></div>
			<div className="modal-card">
				<div className="modal-header">
					<h2>Add new user</h2>
				</div>
				<div className="modal-content">
					<form onSubmit={onCustomerSubmit}>
						<div className='form-group'>
							<label>Full name</label>
							<input value={enteredName} onChange={nameChangeHandler} required></input>
						</div>
						<div className='form-group'>
							<label>Company</label>
							<input value={enteredCompanyName} onChange={companyChangeHandler} required></input>
						</div>
						<div className='form-group'>
							<label>E-mail</label>
							<input value={enteredEmail} onChange={emailChangeHandler} required></input>
						</div>
						<div className='form-group'>
							<label>Position</label>
							<select value={enteredPosition} onChange={positionChangeHandler}>
								<option value="CEO">Chief Executive Officer (CEO)</option>
								<option value="COO">Chief Operating Officer (COO)</option>
								<option value="Marketing Manager">Marketing Manager</option>
								<option value="CFO">Chief Financial Officer</option>
								<option value="Production Manager">Production Manager</option>
								<option value="Control Manager">Quality Control Manager</option>
								<option value="Professional staff">Professional staff</option>
							</select>
						</div>
						<div className='form-group'>
							<label>Previous collaboration?</label>
							<div className='radiobtns-wrapper'>
								<input onChange={collabChangeHandler} type="radio" checked value="yes" name="collab" /> Yes
								<input onChange={collabChangeHandler} type="radio" value="no" className='radiobtn-no' name="collab" /> No
							</div>
						</div>
						<div className='form-actions'>
							<button type='submit' className='submit-customer'>Add Customer</button>
							<button onClick={closeModal} className="close-modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreateCustomerModal