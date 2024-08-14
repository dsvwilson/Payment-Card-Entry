import { useState } from "react";
import './assets/css/form.css';

export default function CardForm({cardName, setCardName, cardNumber, setCardNumber, cardMonth, setCardMonth, cardYear, setCardYear, cardCvc, setCardCvc, formFilled, setFormFilled}) {
    
    /*
        Starting out by building Validation logic for the card form. We're validating upon submission:
            1. that no field is left empty
            2. that numeric-based card fields have only numbers and spaces in them
    */
    
    const [valEngine, setValEngine] = useState(false) // This state variable will be set onFormSubmit and used under each form field to trigger the validation message to be displayed. Its aim is to ensure that validation messages are only printed upon form submission.


    // We set variables to individually check if each field is empty so we would only be outputing error messages to fields that need it. A vairable is set to "true" if its field is empty. Else it remains undefined.
    
    let isCardNameEmpty;
    let isCardNumberEmpty;
    let isCardMonthEmpty;
    let isCardYearEmpty;
    let isCardCvcEmpty;

    if (cardName === "") {
        isCardNameEmpty = true;
    }

    if (cardNumber === "") {
        isCardNumberEmpty = true;
    }

    if (cardMonth === "") {
        isCardMonthEmpty = true;
    }

    if (cardYear === "") {
        isCardYearEmpty = true;
    }

    if (cardCvc === "") {
        isCardCvcEmpty = true;
    }

    // Next, we check each numeric-based card field to ensure that only numbers, and spaces where applicable, are in it. A variable is set to "true" when its field has only numbers and perhaps spaces in it. Else it remains undefined.

    let iscardNumberNum;
    let iscardMonthNum;
    let iscardYearNum;
    let iscardCvcNum;
    
    if (/^[0-9\s]*$/.test(cardNumber)) {
        iscardNumberNum = true;
    }

    if (/^[0-9\s]*$/.test(cardMonth)) {
        iscardMonthNum = true;
    }

    if (/^[0-9\s]*$/.test(cardYear)) {
        iscardYearNum = true;
    }

    if (/^[0-9\s]*$/.test(cardCvc)) {
        iscardCvcNum = true;
    }

    // The above variables are useful for identifying indivudual form fields alone so we know where to send the error messages. Now, we define two variables that will be used in the onFormSubmit function to check if at least one field is empty and all numeric-fields are numeric and perhaps have spaces.

    let isEmptyFields;

    if (isCardNameEmpty || isCardNumberEmpty || isCardMonthEmpty || isCardYearEmpty || isCardCvcEmpty) {
        isEmptyFields = true; // means there is at least one empty field
    }
    
    let isANumber;

    if (iscardNumberNum && iscardMonthNum && iscardYearNum && iscardCvcNum) {
        isANumber = true; // means all numeric-fields are in the right format
    }
    
    /*
        A function is created to be called when the card form submit button is clicked.
    */
    
    function formSubmit(event) {
        event.preventDefault(); // prevents default action on forms and hands control to React
        if (!isEmptyFields && isANumber) {
            setFormFilled(true); // this allows the form to be submitted and triggers the successful message when all validation tests are passed. So we do not need to output any error.
            } else {
                setValEngine(true); // "valEngine" will be set to "true" when there is at least one validation issue with the form fields upon form submission.
                setTimeout(setValEngine, 3000) // a UX feature that sets "valEngine" back to false after 3000 milliseconds (3 seconds). This removes the validation message(s).
            }
        }


    /*
        The controlled component returns a form that controls the input of the field using the state variable passed down from the parent as props. Each field has its own state vairable and is defined in the App component. Each field also has a placeholder. The validation logic error message is included under every message with conditions that print error messages if they are true/false. "valEngine" will always be true for any message to be outputed at all, as this would show that the form submission process failed because the form had a mistake, meaning a message needs to be outputed to the user.
    */

    return (
        <div>
            <form>

                <label className="form-label">CARDHOLDER NAME
                <br />
                <input type="text" name="card-name" value={cardName} onChange={event => setCardName(event.target.value)} placeholder="e.g. Jane Appleseed" />
                {isCardNameEmpty && valEngine ? <div className="error-msg">Cardholder name can't be blank</div> : null}
                </label>
                <br />

                <label className="form-label">CARD NUMBER
                <br />
                <input type="text" inputMode="numeric" name="card-number" value={cardNumber} onChange={event => setCardNumber(event.target.value)} placeholder="e.g 1234 5678 9123 0000" />
                {isCardNumberEmpty && valEngine ? <div className="error-msg">Card number can't be blank</div> : null}
                {!iscardNumberNum && !isCardNumberEmpty && valEngine ? <div className="error-msg">Wrong format, numbers only</div> : null}
                </label>
                <br />

                <label className="form-label">EXP. DATE (MM/YY)
                <br />
                <input type="text" inputMode="numeric" name="card-month" value={cardMonth} onChange={event => setCardMonth(event.target.value)} placeholder="MM" />
                {isCardMonthEmpty && valEngine ? <div className="error-msg">Card expiry month can't be blank</div> : null}
                {!iscardMonthNum && !isCardMonthEmpty && valEngine ? <div className="error-msg">Wrong format, numbers only</div> : null}
                
                <input type="text" inputMode="numeric" name="card-year" value={cardYear} onChange={event => setCardYear(event.target.value)} placeholder="YY" />
                {isCardYearEmpty && valEngine ? <div className="error-msg">Card year can't be blank</div> : null}
                {!iscardYearNum && !isCardYearEmpty && valEngine ? <div className="error-msg">Wrong format, numbers only</div> : null}
                </label>
                <br />

                <label className="form-label">CVC
                <br/>
                <input type="text" inputMode="numeric" name="card-cvc" value={cardCvc} onChange={event => setCardCvc(event.target.value)} placeholder="e.g 123" />
                {isCardCvcEmpty && valEngine ? <div className="error-msg">Card CVC can't be blank</div> : null}
                {!iscardCvcNum && !isCardCvcEmpty && valEngine ? <div className="error-msg">Wrong format, numbers only</div> : null}
                </label>
                <br />

                <input type="submit" value="Confirm" onClick={formSubmit} />
                
            </form>
        </div>
    )
}