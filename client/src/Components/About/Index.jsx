import { Container } from 'react-bootstrap';
import AboutImage from '../../Assets/about_image.png';
import { Link } from 'react-router-dom';
import './About.css';

function About()  {
    return (
        <Container style={{display:"flex" ,alignItems:"center"}}>
            <Container className="content">
                <Container className="header">
                    <h1>Welcome to <span className="title">GoHealth!</span></h1>
                    <h3>Your go-to destination for healthy recipes.</h3>
                </Container>
                
                <Container className="about-section" >
                <Container  className="mission-statement">
                <h5>We proudly provide chefs and bakers with the finest recipes 
                to promote and improve your health. Be it breakfast, lunch,
                or dinner - no matter the time of day, GoHealth has the recipes
                for you. Check out our collection of recipes today!
                </h5>
            <Link className="about-button" to="/recipes">Find Recipes</Link>
                </Container>

       
            </Container>
            </Container>
            <img style={{width:"50%"}} src={AboutImage} alt="About Image" /> 
     
        </Container>
    );
}

export default About;