import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordion/Accordion';
import RandomColor from './component/random-color/RandomColor';
import StarRating from './component/star-rating/StarRating';
import ImageSlider from './component/image-slider/ImageSlider';
import LoadMore from './component/loadmorebutton/LoadMore';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating numOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} /> */}
        <LoadMore/>
    </div>
  );
}

export default App;
