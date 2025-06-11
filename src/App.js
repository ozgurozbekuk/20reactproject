import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordion/Accordion';
import RandomColor from './component/random-color/RandomColor';
import StarRating from './component/star-rating/StarRating';
import ImageSlider from './component/image-slider/ImageSlider';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating numOfStars={10}/> */}
      <ImageSlider/>
    </div>
  );
}

export default App;
