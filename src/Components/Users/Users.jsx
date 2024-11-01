import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData();

    const usersStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px'
    } 

    return (
        <div>

            <h2>Our Users : {users.length}</h2>
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nemo! Doloribus consequatur corrupti dolorem et, voluptas ratione nobis nam magni rerum eos deserunt dolores sint excepturi repellendus quis aspernatur delectus optio libero beatae iusto in, esse ipsum. Ipsum, non voluptate eos architecto soluta itaque inventore excepturi enim eaque ipsa dolorum iure repellendus eveniet nobis velit accusamus minus quibusdam illum cupiditate.</p>
            
        </div>
    );
};

export default Users;