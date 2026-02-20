
import express from 'express'
import { add, getAllRecipe, getRecipeById, getRecipeByUserId, getSavedRecipe, savedRecipeById } from '../Controllers/recipe.js';
import { Authentication } from '../middlewares/auth.js';
const router = express.Router();


//create recipe
router.post('/add',Authentication,add)

//get all recipe
router.get('/',getAllRecipe)

// get all saved recipe
router.get('/saved',getSavedRecipe)


//getRecipeById
router.get('/:id',getRecipeById)

//getRecipe by user Id
router.get('/user/:id',getRecipeByUserId)


//Saved Recipe by Id
router.post('/saved/:id',Authentication,savedRecipeById)


export default router