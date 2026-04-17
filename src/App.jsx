import PassengerTicket from "./PassangerTicket";
import Counter from "./Counter";
import { useState } from "react";

function App() {

  const [age, setAge] = useState(21);
  const [name, setName] = useState('Taylor');

  function greet(user){
    return `Hello! My name is ${user.name}, and my hobby is ${user.hobby}`
  }

  const user={
    name:"Angela",
    email :"shimyunseo@gmail.com",
    hobby:"watching baseball game"
  }

  const Jhon={
    name:"Jhon Doe",
    destination: "New York",
    gender: "Mr",
    seat:"14A"
  }

  const Alex={
    name:"Alex Doe",
    destination: "Tel Aviv",
    gender: "Mr",
    seat:"17A"
  }

  function NumberRangeChecker(number){
    if (number<50){
      return `Input number is ${number}, this umber is Under 50`;
    }else if(number>100){
      return `Input number is ${number}, this umber is Over 100`;
    }else{
      return `Input number is ${number}, this umber is between 50-100`;
      
    }
  } 

  var num = 777;

 const Welcome = (props) =>{
    return <h1>Hello, {props.name}</h1>
  }


  return (
    <>
      <h3>
        <Welcome name={user.name}></Welcome>
      </h3>
      <p>{greet(user)}</p>

      <h3>{NumberRangeChecker(num)}</h3>

      <PassengerTicket {...Jhon}></PassengerTicket>
      <PassengerTicket {...Alex}></PassengerTicket>
      <br></br>
      <div>Hello my name is {name} and I'm {age} years old!</div>
      <br></br>
      <Counter></Counter>
    </>
  );
}

export default App
