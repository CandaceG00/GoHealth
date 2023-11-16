import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Eggs from '../../Assets/Eggs_breakfast.png';
import AvocadoToast from '../../Assets/avocado-toast.png';
import Sandwich from '../../Assets/chicken_avocado.png';
import SteakSandwich from '../../Assets/steak_salad.png';
import FishTacos from '../../Assets/fish_tacos.png';
import ChickenVeggies from '../../Assets/chicken_veggies.png';
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
          ingredients={["2 eggs", "1 bunch of asparagus", "1 onion", "2 tbsp chopped parsley",
        "Preheat the broiler on high. Put the butter in a large cast iron or other ovenproof skillet, and put the skillet under the broiler for a couple of minutes, until the butter is melted.",
        "Add the asparagus, onion, garlic, and red pepper flakes to the skillet and stir. Return the pan to the broiler for about five minutes, until the asparagus is somewhat tender but not fully cooked.",
        "Use a spoon to make four wells in the asparagus mixture for the eggs. Carefully crack one egg into each well. Broil for 2-5 more minutes, checking frequently, until the whites are cooked through but the yolks are still runny (or until cooked to your liking).",
        "Remove the skillet from broiler and top with lemon juice, salt, and pepper. Serve directly from the skillet or transferred to individual plates. This is especially delicious accompanied by some crusty bread or toast!"]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Eggs & Asparagus")}
        />
        <RecipeCard
          title="Avocado On Toast"
          ingredients={["1 ripe avocado", "1 slice multigrain bread", "Pinch of salt", "Pinch of pepper",
          "Halve the avocado vertically and remove the pit. Use a small knife to dice the avocado flesh while it's still inside the skin. Season the flesh with a squeeze of lemon juice and sprinkle it with sea salt.",
          "Scoop the diced avocado flesh out of the skin and onto the toasted bread. Mash the avocado with the back of a fork and top with your desired toppings."]}
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
          ingredients={["1 vegan chicken scallopini", "1 vegan sandwich roll", "1 slice vegan cheese", "2 tsp Dijon mustard", "2 tsp vegan mayo", "Pinch of smoky paprika", "2 romaine/green leaf lettuce leaves", "2 slices onion", "1 tsp extra virgin olive oil", "1/2 avocado, sliced",
          "In a small bowl, mash avocado with garlic powder, and lemon juice. Season to taste with salt and pepper.",
          "On one slice of bread, spread avocado mixture. Top with feta, tomato slices, cucumber slices, red onion, sprouts, and arugula.",
          "One other slice of bread, spread Dijon and place this slice, Dijon-side down, onto the sandwich. Slice in half and serve immediately."]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Chicken & Avocado Sandwich")}
        />
        <RecipeCard
          title="Steak Salad"
          ingredients={["1.33 lb. New York Strip Steak", "2 tbsp Worcestershire sauce", "1 tbsp balsamic vinegar", "1/2 tbsp minced garlic", "1 tbsp olive oil", "1 tbsp lemon juice", "1/4 tsp lemon pepper", "7 oz. romaine lettuce", "1 large avocado", "4 English cucumbers", "10 oz. cherry tomatoes", "1/2 red onion", "1 cup corn", "1/4 cup sunflower seeds", "2 oz. goat cheese crumbles",
          "Combine the Worcestershire, balsamic vinegar, garlic, olive oil, lemon juice, and lemon pepper. Then transfer it into a large container or gallon-size bag and add the steak. Marinate for at least 30-minutes or up to 2 hours.",
          "When you’re ready to cook the steaks remove them from the fridge and bring them to room temperature. Preheat the grill to 500ºF.",
          "Sear the steaks over direct heat for 2 minutes on each side to get those gorgeous grill marks. Then, turn the heat down to medium/high (~400ºF) and continue grilling for around 10-15 minutes*, flipping halfway through. For a medium-cooked steak, cook until the internal temperature of the steak is 140ºF.",
          "Once your steaks are cooked to your liking, remove them from the grill and let them rest for 5 minutes. Then slice them into thin strips.",
          "Next, place the romaine lettuce, avocado, cucumbers, cherry tomatoes, red onion, and corn into a large bowl and toss everything together.",
          "Drizzle the dressing over the salad and toss again.",
          "Finally, top the salad with sliced steak, sunflower seeds, and goat cheese."]}
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
          ingredients={["1 package fishless filets", "1 medium tomato", "3 tbsp red onion", "1/4 cup cilantro", "1 jalapeno", "2 limes", "Sea salt", "Freshly ground black pepper", "1/2 cup vegan mayonnaise", "2 tbsp adobo sauce", "1 cup shredded green cabbage", "1 cup shredded red cabbage", "8 six inch corn tortillas",
          "Preheat oven to 425°, and line a baking sheet with parchment paper.",
          "Place the Fishless Filets evenly onto the baking sheet, and bake for about 15 minutes, or until they are crispy and golden.",
          "While the filets are in the oven, make the salsa and other fillings.",
          "Into a mixing bowl add the tomato, onion, cilantro, jalapeño pepper, lime juice, salt, and pepper. Stir well and season with more salt or lime to taste.",
          "In a small bowl combine the vegan mayo and adobo sauce. Stir until combined.",
          "Warm the tortillas.",
          "To assemble the tacos: Cut the Fishless Filets into strips. Spread some of the vegan chipotle mayo onto the bottom of the tortillas, and top with Fishless Filets, salsa, and cabbage. Serve with more cilantro, fresh jalapeño pepper, and lime juice."]}
          onSave={saveRecipe}
          onRemove={removeRecipe}
          isSaved={savedRecipes.some((savedRecipe) => savedRecipe.title === "Healthy Fish Tacos")}
        />
        <RecipeCard
          title="Chicken & Veggies"
          ingredients={["1 whole chicken", "Kosher salt", "Fresh ground pepper", "6 small carrots", "3 shallots", "1 1/2 lbs fingerling potatoes", "1 lemon", "3 tbsp extra-virgin olive oil", "1/4 cup fresh parsley leaves",
          "Place chicken on a large plate and season generously with salt and pepper; cover with plastic wrap and refrigerate overnight.",
          "Preheat oven to 450°F. Let chicken stand at room temperature 30 minutes. Meanwhile, toss carrots, shallots, potatoes, and lemon with 2 tablespoons oil; season with salt and pepper.",
          "Arrange in a large roasting pan, with shallots in center and carrots, potatoes, and lemon toward edges.",
          "Rub chicken with remaining 1 tablespoon oil, tie legs with twine, and nestle in center.",
          "Roast, flipping vegetables around edges once, until chicken is golden and a thermometer inserted into thickest part of breast (avoiding bone) registers 160°F, 55 to 60 minutes.",
          "Transfer chicken and lemon halves to a carving board and tent loosely with foil.",
          "Flip vegetables; return to oven and roast until caramelized and tender, 15 to 20 minutes more.",
          "Carve chicken and transfer to a platter or return to roasting pan. Sprinkle with parsley, squeeze lemon over top, and serve with vegetables."]}
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