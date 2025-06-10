import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordion/Accordion';
import RandomColor from './component/random-color/RandomColor';
import StarRating from './component/star-rating/StarRating';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      <StarRating numOfStars={15}/>
    </div>
  );
}

export default App;
