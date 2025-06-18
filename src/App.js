import logo from './logo.svg';
import './App.css';
import Accordion from './component/accordion/Accordion';
import RandomColor from './component/random-color/RandomColor';
import StarRating from './component/star-rating/StarRating';
import ImageSlider from './component/image-slider/ImageSlider';
import LoadMore from './component/loadmorebutton/LoadMore';
import TreeView from './component/tree-view-menu/TreeView';
import menus from "./component/tree-view-menu/data.js";
import QrCode from './component/qr-code-generator/QrCode.jsx';
import DarkTheme from './component/dark-theme/DarkTheme.jsx';
import ScrollIndicator from './component/scroll-indicator/ScrollIndicator.jsx';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating numOfStars={10}/> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} /> */}
        {/* <LoadMore/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QrCode/> */}
      {/* <DarkTheme/> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
