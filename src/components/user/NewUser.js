import  React, { useState } from "react";
import Card from "../ui/Card";
import "./NewUser.css"
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {
    const [inputName,setInputName] = useState("")
    const [inputAge,setInputAge] = useState("")
    const [error,setError] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
     //console.log(inputName,inputAge)
    
     if(inputName.trim().length ===0 || inputAge.trim().length === 0){
        setError({title:"invalid input",message:"enter  name and age"})
        return ;
     }
     if(+inputAge < 1){
        setError({title:"invalid age",message:"enter valid age"})
        return ;
     }
     props.onAddUsers(inputName,inputAge)
     setInputName("")
     setInputAge("")
  };
  const changeNameHandler = (event)=>{
     setInputName(event.target.value)
  }
  const changeAgeHandler = (event)=>{
    setInputAge(event.target.value)
  }
  const errorHandler = () =>{
    setError(null)
  }

  return (
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className="input">
    <form  onSubmit={submitHandler}>
      <label>name</label>
      <input type="text" value={inputName}   onChange={changeNameHandler}/>
      <label>age</label>
      <input type="number" value={inputAge} onChange={changeAgeHandler} />
      <Button type="submit" >add user</Button>
    </form>
   
    </Card>
    </Wrapper>
  );
};

export default NewUser;
