import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Eggs from '../assets/Eggs_breakfast.png';
import AvocadoToast from '../assets/avocado-toast.png';
import Sandwich from '../assets/chicken_avocado.png';
import SteakSandwich from '../assets/steak_salad.png';
import FishTacos from '../assets/fish_tacos.png';
import ChickenVeggies from '../assets/chicken_veggies.png';
import '../styles/recipes.css';

function Recipes() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container className="recipe-header">
        <h1>Recipes</h1>
      </Container>
      <Container className="breakfast-heading">
        <h3>Breakfast</h3>
      </Container>

      <Container className="breakfast-container">
        <Card style={{ width: '18rem', marginRight: '20px' }}>
          <Card.Img variant="top" src={Eggs} alt="eggs-asparagus" />
          <Card.Body>
            <Card.Title>Eggs & Asparagus</Card.Title>
            <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              <p>2 eggs</p>
              <p>1 bunch of asparagus</p>
              <p>1 onion</p>
              <p>2 tbsp chopped parsley</p>
            </Card.Text>
            {!expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Read more
              </Button>
            )}
            {expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Show less
              </Button>
            )}
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={AvocadoToast} alt="avocado-toast" />
          <Card.Body>
            <Card.Title>Avocado On Toast</Card.Title>
            <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              <p>2 eggs</p>
              <p>1 bunch of asparagus</p>
              <p>1 onion</p>
              <p>2 tbsp chopped parsley</p>
            </Card.Text>
            {!expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Read more
              </Button>
            )}
            {expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Show less
              </Button>
            )}
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>
      </Container>



      <Container className="breakfast-heading">
        <h3>Lunch</h3>
      </Container>

      <Container className="breakfast-container">
        <Card style={{ width: '18rem', marginRight: '20px' }}>
          <Card.Img variant="top" src={Sandwich} alt="quinoa-sandwich" />
          <Card.Body>
            <Card.Title>Chicken & Avocado Sandwich</Card.Title>
            <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              <p>2 eggs</p>
              <p>1 bunch of asparagus</p>
              <p>1 onion</p>
              <p>2 tbsp chopped parsley</p>
            </Card.Text>
            {!expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Read more
              </Button>
            )}
            {expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Show less
              </Button>
            )}
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={SteakSandwich} alt="steak-salad" />
          <Card.Body>
            <Card.Title>Steak Salad</Card.Title>
            <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              <p>2 eggs</p>
              <p>1 bunch of asparagus</p>
              <p>1 onion</p>
              <p>2 tbsp chopped parsley</p>
            </Card.Text>
            {!expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Read more
              </Button>
            )}
            {expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Show less
              </Button>
            )}
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>
      </Container>



      <Container className="breakfast-heading">
        <h3>Dinner</h3>
      </Container>

      <Container className="breakfast-container">
        <Card style={{ width: '18rem', marginRight: '20px' }}>
          <Card.Img variant="top" src={FishTacos} alt="fish-tacos" />
          <Card.Body>
            <Card.Title>Healthy Fish Tacos</Card.Title>
            <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              <p>2 eggs</p>
              <p>1 bunch of asparagus</p>
              <p>1 onion</p>
              <p>2 tbsp chopped parsley</p>
            </Card.Text>
            {!expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Read more
              </Button>
            )}
            {expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Show less
              </Button>
            )}
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ChickenVeggies} alt="chicken-veggies" />
          <Card.Body>
            <Card.Title>Chicken & Veggies</Card.Title>
            <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
              <p>2 eggs</p>
              <p>1 bunch of asparagus</p>
              <p>1 onion</p>
              <p>2 tbsp chopped parsley</p>
            </Card.Text>
            {!expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Read more
              </Button>
            )}
            {expanded && (
              <Button variant="link" onClick={toggleExpand}>
                Show less
              </Button>
            )}
            <Button variant="primary">Favorite</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Recipes;
