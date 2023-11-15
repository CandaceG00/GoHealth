import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Eggs from '../../assets/Eggs_breakfast.png';
import AvocadoToast from '../../assets/avocado-toast.png';
import Sandwich from '../../assets/chicken_avocado.png';
import SteakSandwich from '../../assets/steak_salad.png';
import FishTacos from '../../assets/fish_tacos.png';
import ChickenVeggies from '../../assets/chicken_veggies.png';
import './Recipes.css';
import { useMutation, useQuery } from '@apollo/client';
/*import {
  GET_RECIPES,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  GET_USER_FAVORITES,
} from '../../utils/queries-mutations';
*/

// Utility function to manage local storage
const getSavedRecipesFromLocalStorage = () => {
  const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
  return savedRecipes;
};

function RecipeCard({ title, ingredients, onSave, onRemove, isSaved }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  /*const toggleSaved = () => {
    console.log('Recipe ID in toggleSaved:', _id);
    console.log('Recipe Title in toggleSaved:', title)
    console.log('Recipe Ingredients in toggleSaved:', ingredients);
    if (isSaved) {
      onRemove({ title, ingredients });
    } else {
      onSave({ title, ingredients });
    }
  };
*/
  const toggleSaved = () => {
    console.log('Recipe Title in toggleSaved:', title)
    console.log('Recipe Ingredients in toggleSaved:', ingredients);
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
  /*
  const { loading, error, data } = useQuery(GET_RECIPES);

  const [addToFavorites] = useMutation(ADD_TO_FAVORITES, {
    refetchQueries: [{ query: GET_USER_FAVORITES }], 
  });

  const [removeFromFavorites] = useMutation(REMOVE_FROM_FAVORITES, {
    refetchQueries: [{ query: GET_USER_FAVORITES }],
  });
*/
  const [savedRecipes, setSavedRecipes] = useState(getSavedRecipesFromLocalStorage());
  const [displayFavorites, setDisplayFavorites] = useState(false);

  const saveRecipe = (recipe) => {
    try {
      console.log('Recipe Title:', recipe.title);
      console.log('Recipe:', recipe); // Log the entire recipe object

      // Check if recipe._id is valid before making mutation
      if (!recipe.title) {
        console.error('Recipe title is missing or invalid.');
        return;
      }

      const updatedRecipes = [...savedRecipes, recipe];
      setSavedRecipes(updatedRecipes);

      // Update local storage on save
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    } catch (error) {
      console.error('Error saving recipe:', error);
    }
  };

  const removeRecipe = (recipeToRemove) => {
    try {
      console.log('Removing Recipe:', recipeToRemove);
      
      const updatedRecipes = savedRecipes.filter(
        (recipe) => recipe.title !== recipeToRemove.title
      );
      setSavedRecipes(updatedRecipes);

      // Update local storage on remove
      localStorage.setItem('savedRecipes', JSON.stringify(updatedRecipes));
    } catch (error) {
      console.error('Error removing recipe:', error);
    }
  };

  const toggleDisplayFavorites = () => {
    setDisplayFavorites(!displayFavorites);
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
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Eggs & Asparagus")}
        />
        <RecipeCard
          title="Avocado On Toast"
          ingredients={["1 ripe avocado", "1 slice multigrain bread", "Pinch of salt", "Pinch of pepper"]}
          onSave={(recipe) => saveRecipe(recipe)}
          onRemove={(recipe) => removeRecipe(recipe)}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Avocado On Toast")}
        />
      </Container>

      <Container className="breakfast-heading">
        <h3>Lunch</h3>
      </Container>
      <Container className="breakfast-container" style={{ display: 'flex', gap: '20px' }}>
        <RecipeCard
          title="Chicken & Avocado Sandwich"
          ingredients={["1 vegan chicken scallopini", "1 vegan sandwich roll", "1 slice vegan cheese", "2 tsp Dijon mustard", "2 tsp vegan mayo", "Pinch of smoky paprika", "2 romaine/green leaf lettuce leaves", "2 slices onion", "1 tsp extra virgin olive oil", "1/2 avocado, sliced"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Chicken & Avocado Sandwich")}
        />
        <RecipeCard
          title="Steak Salad"
          ingredients={["1.33 lb. New York Strip Steak", "2 tbsp Worcestershire sauce", "1 tbsp balsamic vinegar", "1/2 tbsp minced garlic", "1 tbsp olive oil", "1 tbsp lemon juice", "1/4 tsp lemon pepper", "7 oz. romaine lettuce", "1 large avocado", "4 English cucumbers", "10 oz. cherry tomatoes", "1/2 red onion", "1 cup corn", "1/4 cup sunflower seeds", "2 oz. goat cheese crumbles"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Steak Salad")}
        />
      </Container>

 
      <Container className="breakfast-heading">
        <h3>Dinner</h3>
      </Container>
      <Container className="breakfast-container" style={{ display: 'flex', gap: '20px' }}>
        <RecipeCard
          title="Healthy Fish Tacos"
          ingredients={["1 package fishless filets", "1 medium tomato", "3 tbsp red onion", "1/4 cup cilantro", "1 jalapeno", "2 limes", "Sea salt", "Freshly ground black pepper", "1/2 cup vegan mayonnaise", "2 tbsp adobo sauce", "1 cup shredded green cabbage", "1 cup shredded red cabbage", "8 six inch corn tortillas"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Healthy Fish Tacos")}
        />
        <RecipeCard
          title="Chicken & Veggies"
          ingredients={["1 whole chicken", "Kosher salt", "Fresh ground pepper", "6 small carrots", "3 shallots", "1 1/2 lbs fingerling potatoes", "1 lemon", "3 tbsp extra-virgin olive oil", "1/4 cup fresh parsley leaves"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Chicken & Veggies")}
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
            onClick={toggleDisplayFavorites}
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
