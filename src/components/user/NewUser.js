import  React, { useState, useRef } from "react";
import Card from "../ui/Card";
import "./NewUser.css"
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {
    const inputNameRef = useRef()
    const inputAgeRef = useRef()
    const inputCollegeRef = useRef()
    // const [inputName,setInputName] = useState("")
    // const [inputAge,setInputAge] = useState("")
    const [error,setError] = useState()
  const submitHandler = (event) => {
    event.preventDefault();
     //console.log(inputName,inputAge)
    // console.log(inputNameRef.current.value)
    const enteredName = inputNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;
    const enteredCollege = inputCollegeRef.current.value;
    
     if(enteredName.trim().length ===0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0){
        setError({title:"invalid input",message:"enter  name and age and college"})
        return ;
     }
     if(+enteredAge < 1){
        setError({title:"invalid age",message:"enter valid age"})
        return ;
     }
     props.onAddUsers(enteredName,enteredAge,enteredCollege)
     inputNameRef.current.value = "";
     inputAgeRef.current.value = "";
     inputCollegeRef.current.value = "";
    //  setInputName("")
    //  setInputAge("")
  };
//   const changeNameHandler = (event)=>{
//      setInputName(event.target.value)
//   }
//   const changeAgeHandler = (event)=>{
//     setInputAge(event.target.value)
//   }
  const errorHandler = () =>{
    setError(null)
  }

  return (
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className="input">
    <form  onSubmit={submitHandler}>
      <label>name</label>
      <input type="text"  ref={inputNameRef}/>
      <label>age</label>
      <input type="number"  ref={inputAgeRef}/>
      <label>college name</label>
      <input type="text"  ref={inputCollegeRef}/>
      <Button type="submit" >add user</Button>
    </form>
   
    </Card>
    </Wrapper>
  );
};

export default NewUser;
