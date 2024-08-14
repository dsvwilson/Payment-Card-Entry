import formIconSubmitted from './assets/images/icon-complete.svg';
import './assets/css/completed.css';

/*
    This component shows the "completed page" after the form is successfully submitted. It also includes a button that clears the form and sets the "formFilled" state to "false" which removed the completed page and returns the empty form page.
*/

export default function FormSubmitted({cardName, setCardName, cardNumber, setCardNumber, cardMonth, setCardMonth, cardYear, setCardYear, cardCvc, setCardCvc, formFilled, setFormFilled}) {

    function backToForm() {
        setCardName(""); 
        setCardNumber(""); 
        setCardMonth(""); 
        setCardYear(""); 
        setCardCvc(""); 
        setFormFilled(false);
    }

    return (
        <div className="form-submitted">
        <img src={formIconSubmitted} className="fs-icon" alt="Form submitted" />
        <p className="fs-heading">Thank You!</p>
        <p className="fs-body">We've added your card details</p>
        <button className="fs-button" onClick={backToForm}>Continue</button>
        </div>
    )
}