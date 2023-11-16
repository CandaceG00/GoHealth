import './HomePage.css';
import { Container } from 'react-bootstrap';
import coverImage from '../../assets/Healthy_Recipe1.png';
import { Link } from 'react-router-dom';


function HomePage()  {
    return (
        <>
        <Container className="header">
            <h1>Welcome to <span className="title">GoHealth!</span></h1>
            </Container>

        <Container className="coverpicture">
            <Link className="overlay-button" to="/recipes">
            Find Recipes
            </Link>
            <img src={coverImage} alt="Cover Image" /> 

            
        </Container>

        <br></br>
        <br></br>

        </>
    );
}


export default HomePage;