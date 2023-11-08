import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AboutImage from '../assets/about_image.png';
import '../styles/about.css';

function about()  {
    return (
        <>
        <Container className="header">
            <h1>Welcome to <span className="title">GoHealth!</span></h1>
            </Container>

        <Container>
            <h3>Your go-to destination for healthy recipes.</h3>
        </Container>

        <br></br>
        <Container className="about-section">
            <Container className="mission-statement">
                <h5>We proudly provide chefs and bakers with the finest recipes 
                to promote and improve your health. Be it breakfast, lunch,
                or dinner - no matter the time of day, GoHealth has the recipes
                for you. Check out our collection of recipes today!
                </h5>
                <button className="about-button">Find Recipes</button>
            </Container>

            <Container className="about-image">
            <   img src={AboutImage} alt="About Image" /> 
            </Container>
        </Container>
        </>
    );
}

export default about;