import './index.css';
import star from "./icon-star.svg"
import thanksLogo from "./illustration-thank-you.svg"



function App() {
  return (
    <div className="card-container">
      <div className="card">
        <img src={star} alt="icon start"></img>
        <div className="card-text">
          <h1>How did we do?</h1>
          <p>
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
          </p>
        </div>
        <div className="rating-container">
          1 2 3 4 5
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default App;
