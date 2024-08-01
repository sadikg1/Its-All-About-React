import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMesage from "./components/ErrorMesage";
import Meals from "./components/Meals";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  // let foodItems = ["Kalo Daal", "Bhat", "Tarkari", "Power", "24 hour"];
  let meals = ["Breakfast", "Lunch", "Dinner"];
  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(newFoodItem);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };

  // let foodItems=[];
  // let emptyMsg=foodItems.length==0? <h2>I am still hungry</h2> : null;
  return (
    <>
      <Container>
        <h1 className="foodHead">Healthy Food</h1>

        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        {/* {emptyMsg} */}
        <FoodItems
          items={foodItems}
        ></FoodItems>
        <ErrorMesage items={foodItems}></ErrorMesage>
        <h1>Lets see meals</h1>
        <Meals items={meals}></Meals>
      </Container>
      {/* <Container>
        <p>Above is the list of healthy meals that are good for your health.</p>
      </Container> */}
    </>
  );
}

export default App;
