import './style.scss';
import star from "./icon-star.svg"
import thanksLogo from "./illustration-thank-you.svg"



function App() {
  return (
    <div className="card-container dis-flex-row">
      <div className="card dis-flex-col">
        <div className='star-container dis-flex-col'>
          <img className="star-logo" src={star} alt="icon start"></img>
        </div>
        
        <div className="card-text">
          <h1>How did we do?</h1>
          <p>
          Please let us know how we did with your support<br /> request. All feedback is appreciated 
          to help us <br /> improve our offering!
          </p>
        </div>
        <div className="rating-container">
          <ul>
            <li><Button value="1" /></li>
            <li><Button value="2" /></li>
            <li><Button value="3" /></li>
            <li><Button value="4" /></li>
            <li><Button value="5" /></li>
          </ul>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

function Button({value}){
  return(
    <button className="number-value">{value}</button>
  )
}

function ThankYou(){
  return(
    <div className='card-container dis-flex-col'>
      <div className='card dis-flex-col'>
        
      </div>

    </div>
  )
}
export default App;
