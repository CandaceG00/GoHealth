import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homePage.css';
import { Container } from 'react-bootstrap';
import coverImage from '../assets/Healthy_Recipe1.png';


function homeContent()  {
    return (
        <>
        <Container className="header">
            <h1>Welcome to <span className="title">GoHealth!</span></h1>
            </Container>

        <Container className="coverpicture">
            <button className="overlay-button">Find Recipes</button>
            <img src={coverImage} alt="Cover Image" /> 
            
        </Container>
        </>
    );
}


export default homeContent;