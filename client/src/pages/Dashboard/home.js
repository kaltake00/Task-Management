import './home.css'

const Home = () => {
    return (
        <div className="page_wrapper">
        
            <div className="dashboard-topbar">
                <h1>Welcome to Dashboard</h1>
                <p className='customer-hint'>Hi there. There are all created tasks that belong to you. You can easily see all details about every task that is given to you</p>
                <p className='customer-hint'>Also you can double click on sigle task to open a new widow to see more details about them.</p>
            </div>
            <div className='dashboard-page_body'>
                <div className='row'>
                    <div className='card-column'>
                        <div className='dashboard-card'>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/icons/customers.png"} alt="" />
                            <h2 className='card-title'>Customers</h2>
                            <p className='card-text'>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                    </div>
                    <div className='card-column'>
                        <div className='dashboard-card'>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/icons/users.png"} alt="" />
                            <h2 className='card-title'>Users</h2>
                            <p className='card-text'>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                    </div>
                    <div className='card-column'>
                        <div className='dashboard-card'>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/icons/tasks.png"} alt="" />
                            <h2 className='card-title'>All Tasks</h2>
                            <p className='card-text'>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                    </div>
                    <div className='card-column'>
                        <div className='dashboard-card'>
                            <img className="card-icon" src={process.env.PUBLIC_URL + "/icons/tasks.png"} alt="" />
                            <h2 className='card-title'>My Tasks</h2>
                            <p className='card-text'>Lorem Ipsum Dolor Sit Amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;