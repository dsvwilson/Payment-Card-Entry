import cardLogo from './assets/images/card-logo.svg';
import './assets/css/card.css';

/*
    This component creates and renders the card on which the user's inputted card details are rended on each keystroke. It receives the same props used in the card form from the App component and renders it to the appropriate places. Each field checks if its state has a value; else, it has a string as a default value which is replaced in real time upon typing.
*/

export default function Card({cardName, cardNumber, cardMonth, cardYear, cardCvc}) {

    return (
        <div className="card">
            <img src={cardLogo} className='card-logo' alt='Card logo' />
            <p className='display-card-number'>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</p>
            <p className='display-card-name'>{cardName ? cardName : "JANE APPLESEED"}</p>
            <p className='display-card-date'>{cardMonth ? cardMonth : "00"}/{cardYear ? cardYear : "00"}</p>
            <p className='display-card-cvc'>{cardCvc ? cardCvc : "000"}</p>
        </div>
    )
}