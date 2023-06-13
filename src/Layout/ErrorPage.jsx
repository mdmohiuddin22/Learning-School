import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="ml-56">
           <img src="https://i.ibb.co/BsvqMFx/404-error-with-landscape-concept-illustration-114360-7898.jpg" alt="" />
           <Link to="/"><button className="btn btn-primary">GoBack Home</button></Link>
        </div>
    );
};

export default ErrorPage;