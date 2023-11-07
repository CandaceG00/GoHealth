import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/homePage.css';
import { Container } from 'react-bootstrap';
import coverImage from '../assets/Healthy_Recipe1.png';
import '../styles/footer.css';


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

        <br></br>

        <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
        </>
    );
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

export default homeContent;