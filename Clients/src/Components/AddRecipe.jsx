import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast,Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddRecipe = () => {

    const navigate = useNavigate()
    const { addRecipe } = useContext(AppContext);

    const [formData, setformData] = useState({
         title:"",
    inst:"",
    ing1:"",
    ing2:"",
    ing3:"",
    ing4:"",
    qty1:"",
    qty2:"",
    qty3:"",
    qty4:"",
    imgUrl:"",
    });

    const onChangeHandler = (e) =>{
      const {name, value} = e.target
      setformData({...formData,[name]:value})
    }

    const onSubmitHandler = async(e) =>{
      const {title,
    inst,
    ing1,
    ing2,
    ing3,
    ing4,
    qty1,
    qty2,
    qty3,
    qty4,
    imgUrl,} = formData;
      e.preventDefault();
      const result = await  addRecipe(title,
    inst,
    ing1,
    ing2,
    ing3,
    ing4,
    qty1,
    qty2,
    qty3,
    qty4,
    imgUrl,)

    // console.log("Add Recipe ",result);
    toast.success(result.data.message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    })
        // console.log(result.data);
        setTimeout(()=>{
            navigate('/')
        },1500)
    }
  return (
    <>
    <ToastContainer />
      <div className="container my-5 p-5" 
      style={{
        width:"500px",
        border:'2px solid yellow',
        borderRadius:'10px'
        }}>
        <h2 className="text-center">Add Recipe</h2>
        <form onSubmit={onSubmitHandler}
        style={{ width:"400px",}} className="my-3">
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              title 
            </label>
            <input value={formData.title}
                  onChange={onChangeHandler}
              type="text"  name="title"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              inst
            </label>
            <input  value={formData.inst}
                  onChange={onChangeHandler}
              type="text" name="inst"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ing1
            </label>
            <input  value={formData.ing1}
                  onChange={onChangeHandler}
              type="text"  name="ing1"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ing2
            </label>
            <input  value={formData.ing2}
                  onChange={onChangeHandler}
              type="text"  name="ing2"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ing3
            </label>
            <input value={formData.ing3}
                  onChange={onChangeHandler}
              type="text"  name="ing3"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              ing4
            </label>
            <input  value={formData.ing4}
                  onChange={onChangeHandler}
              type="text"  name="ing4"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              qty1
            </label>
            <input value={formData.qty1}
                  onChange={onChangeHandler}
              type="text"  name="qty1"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              qty2
            </label>
            <input value={formData.qty2}
                  onChange={onChangeHandler}
              type="text" name="qty2"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              qty3
            </label>
            <input value={formData.qty3}
                  onChange={onChangeHandler}
              type="text" name="qty3"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              qty4
            </label>
            <input value={formData.qty4}
                  onChange={onChangeHandler}
              type="text" name="qty4"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

           <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
             imgUrl
            </label>
            <input  value={formData.imgUrl}
                  onChange={onChangeHandler}
              type="text" name="imgUrl"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

         <div className="container d-grid col-6"> <button type="submit" className="btn btn-primary mt-3">
            Add Recipe 
          </button></div>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
