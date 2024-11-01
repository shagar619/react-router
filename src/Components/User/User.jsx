import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {

    const {id, name, email, phone} = user;
    const navigate = useNavigate();

    const userStyle = {
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

    const handleUserDetails = () => {
        navigate(`/user/${id}`);
    }


    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>E-mail : {email}</p>
            <p>Phone : {phone}</p>
            <button onClick={handleUserDetails} style={btnStyle}>Show Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.array
}

export default User; 