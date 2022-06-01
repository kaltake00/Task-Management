import { Link } from "react-router-dom";


const NoPage = () => {
    return(
        <div>
            <h1>Error 404</h1>
            <h3>Page not found!</h3>

            <Link to="/">Back to home</Link>

        </div>
    )
}


export default NoPage;