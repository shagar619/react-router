import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = post;
    const navigate = useNavigate();

    console.log(postId);

    const postDetailsStyle = {
        border: '2px solid green',
        padding: '24px',
        borderRadius: '8px',
        margin: '12px'
    }

    const btnGoBackStyle = {
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
        <div style={postDetailsStyle}>
            <h2>Post Details : {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <br />
            <button onClick={handleGoBack} style={btnGoBackStyle}>Go back</button>
        </div>
    );
};

export default PostDetails;