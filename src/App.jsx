// placeholder component
import { useState } from "react";
import CardForm from "./Form";
import Card from "./Card";
import FormSubmitted from "./Submitted";
import './assets/css/app.css';

/*
  The component that renders everything and the starting point for our application. We have state variables for each form field for the Form component. The state variables are also passed down as props to other components for use within them as well. The state variables are initially set as empty strings which are updated in the Form component and used throughout the application.
*/

export default function App() {
  const [cardName, setCardName] = useState(""); // sets state for the CARDHOLDER NAME
  const [cardNumber, setCardNumber] = useState(""); // sets state for the CARD NUMBER
  const [cardMonth, setCardMonth] = useState(""); // sets state for the CARD EXP. MONTH
  const [cardYear, setCardYear] = useState(""); // sets state for the CARD EXP. YEAR 
  const [cardCvc, setCardCvc] = useState(""); // sets state for the CARD CVC
  const [formFilled, setFormFilled] = useState(false); // state that represents if the form has been submitted. Setting this to true onFormSubmit removes the form and renders the Complete component. The default state of false does not render the Completed component and instead renders the form to be filled.
  
  /*
    Returns the components to be displayed on the application. It renders the Card component by default in two places (front and back) and conditionally renders either the Form or Completed components depending on the state of the form. By default, Form is rendered; then after the form is filled and submitted, the Completed component is rendered. Clicking further on the Completed component will again render the form.
  */
  
  return (
    <>
      <Card cardName={cardName} 
      cardNumber={cardNumber}
      cardMonth={cardMonth}
      cardYear={cardYear}
      cardCvc={cardCvc}
      />
      
      {!formFilled ? (
        <CardForm 
        cardName={cardName}
        setCardName={setCardName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardMonth={cardMonth}
        setCardMonth={setCardMonth}
        cardYear={cardYear}
        setCardYear={setCardYear}
        cardCvc={cardCvc}
        setCardCvc={setCardCvc}
        formFilled={formFilled}
        setFormFilled={setFormFilled}
        />
      ) : (
        <FormSubmitted 
        cardName={cardName}
        setCardName={setCardName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardMonth={cardMonth}
        setCardMonth={setCardMonth}
        cardYear={cardYear}
        setCardYear={setCardYear}
        cardCvc={cardCvc}
        setCardCvc={setCardCvc}
        formFilled={formFilled}
        setFormFilled={setFormFilled}
        />
      )}
      

    </>
  )
}