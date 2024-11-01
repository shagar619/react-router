import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {

    const posts = useLoaderData();

    const postsStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12px'
    }


    return (
        <div>
            <h3>Posts : {posts.length}</h3>
            <div style={postsStyle}>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;