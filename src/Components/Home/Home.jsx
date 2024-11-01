import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {

    const navigation = useNavigation();
    // const location = useLocation();


    //  console.log(location);
    // console.log(navigation);


    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ?
                 <p>loading...</p> : 
                 <Outlet></Outlet>
            }
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;