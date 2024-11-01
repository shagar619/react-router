import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const {id, title} = post;

    const navigate = useNavigate(); 

    const postStyle = {
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


    const handleShowDetails = () => {
        navigate(`/post/${id}`);
    }


    return (
        <div style={postStyle}>
            <h4>Post of Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />
            <br />
            <button onClick={handleShowDetails} style={btnStyle}>See Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.array
}

export default Post;