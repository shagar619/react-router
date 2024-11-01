import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    const {name, website} = user;
    const navigate = useNavigate();

    const detailsStyle = {
        border: '2px solid green',
        padding: '24px',
        borderRadius: '8px',
        margin: '12px'
    }

    const btnStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 14px',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 'bold',
    }


    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div style={detailsStyle}>
            <h3>Details about user : {name}</h3>
            <p>Website : {website}</p>
            <button onClick={handleGoBack} style={btnStyle}>Go back</button>
        </div>
    );
};

export default UserDetails; 