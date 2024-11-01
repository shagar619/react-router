import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

    const navStyle = {
        display: 'flex',
        gap: '24px',
        fontSize: '22px',

    }




    return (
        <div>
            <h1>This is Header</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, facilis ad dolorum aperiam obcaecati quae quam voluptates impedit eum. Harum quod labore quae, eaque optio doloribus provident iure laboriosam nihil at sunt nisi perferendis. Aspernatur culpa ut aliquam rerum labore possimus ratione ipsam modi fugiat similique consectetur quasi, mollitia sit fugit nisi quidem deserunt obcaecati sunt? Reiciendis, ipsa. Doloremque non nisi architecto provident ad, veritatis sapiente itaque aliquam inventore nam optio voluptas impedit delectus, alias obcaecati ipsa? Eligendi ut libero vel reiciendis eius laborum non nam, porro doloremque omnis architecto tempore laudantium eos recusandae suscipit excepturi totam explicabo esse enim? Aliquid a pariatur dolorum placeat, quibusdam fugit eligendi eaque, sequi exercitationem, sed numquam ipsa voluptates eos ipsam doloribus nam labore odio accusamus velit aperiam sint libero. Fugit quo voluptatibus molestias consequatur? Debitis saepe facere animi error dolorum doloribus voluptate, ea vitae est labore, molestiae repellendus soluta rerum ab fugiat, deserunt maiores. Impedit perspiciatis ipsa ducimus facilis maxime natus cum, perferendis repellat sapiente, sint cumque reiciendis eveniet et officiis voluptates aliquam amet. Doloremque vero inventore pariatur dolore ullam sapiente enim ad optio maxime consequatur illum aperiam unde omnis, nisi quaerat quia debitis dignissimos dolor esse asperiores nulla earum! Esse, sequi. In.</p>
            <nav style={navStyle}>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
                <NavLink to="/posts">Posts</NavLink>

            </nav>
        </div>
    );
};

export default Header;