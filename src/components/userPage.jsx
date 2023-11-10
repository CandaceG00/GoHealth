import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Eggs from '../assets/Eggs_breakfast.png';
import AvocadoToast from '../assets/avocado-toast.png';
import Sandwich from '../assets/chicken_avocado.png';
import SteakSandwich from '../assets/steak_salad.png';
import FishTacos from '../assets/fish_tacos.png';
import ChickenVeggies from '../assets/chicken_veggies.png';
import '../styles/userPage.css';

function RecipeCard({ title, ingredients, onSave, onRemove, isSaved }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleSaved = () => {
    if (isSaved) {
      onRemove({ title, ingredients });
    } else {
      onSave({ title, ingredients });
    }
  };

  const buttonLabel = isSaved ? 'Saved' : 'Favorite';
  const buttonClass = isSaved ? 'saved-button' : '';

  const ingredientList = ingredients.map((ingredient, index) => (
    <p key={index}>{ingredient}</p>
  ));

  return (
    <Card style={{ width: '18rem', marginBottom: '20px' }}>
      <Card.Img
        variant="top"
        src={
          title === "Eggs & Asparagus" ? Eggs :
          title === "Avocado On Toast" ? AvocadoToast :
          title === "Chicken & Avocado Sandwich" ? Sandwich :
          title === "Steak Salad" ? SteakSandwich :
          title === "Healthy Fish Tacos" ? FishTacos : ChickenVeggies
        }
        alt={
          title === "Eggs & Asparagus" ? "eggs-asparagus" :
          title === "Avocado On Toast" ? "avocado-toast" :
          title === "Chicken & Avocado Sandwich" ? "quinoa-sandwich" :
          title === "Steak Salad" ? "steak-salad" :
          title === "Healthy Fish Tacos" ? "fish-tacos" : "chicken-veggies"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ maxHeight: expanded ? 'none' : '100px', overflow: 'hidden' }}>
          {ingredientList}
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
        <Button variant="primary" onClick={toggleSaved} className={buttonClass}>
          {buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}

function Recipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [displayFavorites, setDisplayFavorites] = useState(false);

  const saveRecipe = (recipe) => {
    setSavedRecipes([...savedRecipes, recipe]);
  };

  const removeRecipe = (recipeToRemove) => {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.title !== recipeToRemove.title
    );
    setSavedRecipes(updatedRecipes);
  };

  return (
    <>
      <Container className="recipe-header">
        <h1>Recipes</h1>
      </Container>

      <Container className="breakfast-heading">
        <h3>Breakfast</h3>
      </Container>
      <Container className="breakfast-container" style={{ display: 'flex', gap: '20px' }}>
        <RecipeCard
          title="Eggs & Asparagus"
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((recipe) => recipe.title === "Eggs & Asparagus")}
        />
        <RecipeCard
          title="Avocado On Toast"
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((recipe) => recipe.title === "Avocado On Toast")}
        />
      </Container>

      <Container className="breakfast-heading">
        <h3>Lunch</h3>
      </Container>
      <Container className="breakfast-container" style={{ display: 'flex', gap: '20px' }}>
        <RecipeCard
          title="Chicken & Avocado Sandwich"
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((recipe) => recipe.title === "Chicken & Avocado Sandwich")}
        />
        <RecipeCard
          title="Steak Salad"
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((recipe) => recipe.title === "Steak Salad")}
        />
      </Container>

 
      <Container className="breakfast-heading">
        <h3>Dinner</h3>
      </Container>
      <Container className="breakfast-container" style={{ display: 'flex', gap: '20px' }}>
        <RecipeCard
          title="Healthy Fish Tacos"
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((recipe) => recipe.title === "Healthy Fish Tacos")}
        />
        <RecipeCard
          title="Chicken & Veggies"
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((recipe) => recipe.title === "Chicken & Veggies")}
        />
      </Container>
      
      <Container className="favorites-heading">
        <h3>Favorites</h3>
      </Container>
      {displayFavorites && (
        <Container className="favorites-container" style={{ display: 'flex', gap: '20px' }}>
          {savedRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              ingredients={recipe.ingredients}
              onSave={saveRecipe}
              onRemove={removeRecipe}
              isSaved={true}
            />
          ))}
        </Container>
      )}

      <Container className="show-favorites-button">
        {savedRecipes.length > 0 && (
          <Button
            onClick={() => setDisplayFavorites(!displayFavorites)}
            variant="primary"
            className="show-hide-button"
          >
            {displayFavorites ? 'Hide Favorites' : 'Show Favorites'}
          </Button>
        )}
      </Container>
    </>
  );
}

export default Recipes;
