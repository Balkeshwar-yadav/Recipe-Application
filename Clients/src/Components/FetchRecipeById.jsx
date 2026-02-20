import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const FetchRecipeById = ({ id }) => {
  const location = useLocation()
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState(null);
  // console.log(id);
  useEffect(() => {
     if (!id) return;
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      // console.log("recipe by id ",result)
      setRecipe(result.data.recipe);
    };

    fetchRecipe(id);
  }, [id]);
  return (
    <div className="text-center">
      <div className=" text-center">
        <div className="d-flex justify-content-center align-items-center p-3">
          <img
            src={recipe?.imgUrl}
            className="card-img-top"
            alt={recipe?.title}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "10px",
              border: "2px solid yellow",
            }}
          />
        </div>
        <h3 >{recipe?.title}</h3>
      </div>

      {location.pathname !== '/saved'  &&(
        <>
            
      <div className="container" style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
         margin:"20px",
         flexDirection:"row"

      }} >
        <div className="left">
            <h4>{recipe?.ing1} - {recipe?.qty1}</h4>
            <h4>{recipe?.ing2} - {recipe?.qty2}</h4>
            <h4>{recipe?.ing3} - {recipe?.qty3}</h4>
            <h4>{recipe?.ing4} - {recipe?.qty4}</h4>
        </div>
        <div className="right" style={{maxWidth:'500px', marginLeft:"50px"}} >{recipe?.inst}</div>
      </div>
      <Link to={'/'} className="btn btn-warning my-5">Back to Home</Link>
        </>
      )}

    </div>
  );
};

export default FetchRecipeById;
