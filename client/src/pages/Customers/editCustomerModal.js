import { useState } from 'react'
import './createCustomerModal.css'


const EditCustomerModal = (props) => {

	const editingUserData = props.selectedCustomerData;
	var checkedYes = true;
	var checkedStatus = "yes";
	if (editingUserData.collaboration === 0){
		checkedYes = false;
		checkedStatus = "no"
	}

	const [enteredName, setEnteredName] = useState(editingUserData.name);
	const [enteredCompanyName, setCompanyName] = useState(editingUserData.company_name);
	const [enteredEmail, setEnteredEmail] = useState(editingUserData.email);
	const [enteredPosition, setEnteredPosition] = useState(editingUserData.title);
	const [enteredCollab, setEnteredCollab] = useState(checkedStatus);


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
			id: editingUserData.id,
			name: enteredName,
			companyname: enteredCompanyName,
			email: enteredEmail,
			position: enteredPosition,
			collaboration: enteredCollab
		}
		props.onSubmitEdit(customerData);

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
					<h2>Edit User: {enteredName}</h2>
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
							<select value={enteredPosition} id="position-dropdown" onChange={positionChangeHandler}>
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
								<input onChange={collabChangeHandler} type="radio" value="yes" checked={checkedYes === true} name="collab" /> Yes
								<input onChange={collabChangeHandler} type="radio" value="no" checked={checkedYes === false} className='radiobtn-no' name="collab" /> No
							</div>
						</div>
						<div className='form-actions'>
							<button type='submit' className='submit-customer'>Save Customer</button>
							<button onClick={closeModal} className="close-modal">Close</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default EditCustomerModal