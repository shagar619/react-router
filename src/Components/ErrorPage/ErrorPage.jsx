import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();


    const errorStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }

    const homeStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 14px',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 'bold',
    }

    return (
        <div style={errorStyle}>
            <h1>Oops!!!!!!</h1>
            <h2>Sorry, an unexpected error has occurred</h2>
            <h1>{error.status}</h1>
            <p><i>{error.statusText || error.message}</i></p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where are you from</p>
                    <Link to="/"><button style={homeStyle}>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;