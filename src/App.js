import './style.scss';
import star from "./icon-star.svg"
import thanksLogo from "./illustration-thank-you.svg"
import React, {useState} from 'react';



function App() {
  const [number,setNumber] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    if (number === 0){
      return
    }
    setSubmitted(prev => !prev);
  }
  const changeNumber = (e) => {
    setNumber(e.target.value);
  }

  return (
    <div className="card-container dis-flex-col">
      {submitted 
      ? <ThankYou number={number} handleSubmit={handleSubmit}/> 
      : <MainCard changeNumber={changeNumber} handleSubmit={handleSubmit}/>
      }
    </div>
  );
}

function Button({value, change}){
  return(
    <button className="number-value" onClick={change} value={value}>{value}</button>
  )
}

function MainCard({changeNumber , handleSubmit}){
  return(
    <div className="card dis-flex-col align-start">
      <div className='star-container dis-flex-col'>
        <img className="star-logo" src={star} alt="icon start"></img>
      </div>
      
      <div className="card-text">
        <h1>How did we do?</h1>
        <p>
        Please let us know how we did with your support 
        request. All feedback is appreciated to help us 
        improve our offering!
        </p>
      </div>
      <div className="rating-container">
        <ul>
          <li><Button value="1"  change={changeNumber} /></li>
          <li><Button value="2"  change={changeNumber} /></li>
          <li><Button value="3" change={changeNumber} /></li>
          <li><Button value="4" change={changeNumber} /></li>
          <li><Button value="5" change={changeNumber} /></li>
        </ul>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>

  );
  
}

function ThankYou({number, handleSubmit}){
  return(
    <div className='card dis-flex-col'>

      <img src={thanksLogo} className="thanks-logo" alt="thank you" />
      <div className='selected'>

        <p> You selected {number} out of 5</p>

      </div>
      <div className='card-text card-pad'>

        <h2>Thank You!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don't hesitate to get in touch</p>

      </div>
        <button className="submit-btn" onClick={handleSubmit}>Rate Again</button>
    </div>


  )
}
export default App;
