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
import TabTest from './component/custom-tabs/TabTest.jsx';
import ModalTest from './component/custom-modal-popup/ModalTest.jsx';
import ProfileFinder from './component/github-profile-finder/ProfileFinder.jsx';
import SearchAutocomplete from './component/search-autocomplete/SearchAutocomplete.jsx';
import Tictactoe from './component/tic-tac-toe/Tictactoe.jsx';
import FeatureFlagGlobalState from './component/feature-flags/context/FeatureFlagsGlobalState.jsx';
import FeatureFlags from './component/feature-flags/FeatureFlags.jsx';
import UseFetchHookTest from './component/use-fetch/UseFetchHookTest.jsx';
import UseOutsideTest from './component/use-outside-click/UseOutsideTest.jsx';
import UseWindowResizeTest from './component/use-window-resize/UseWindowResizeTest.jsx';
import ScrollTopAndBottom from './component/scroll-top-and-bottom/ScrollTopAndBottom.jsx';
import SrollToSection from './component/scroll-top-and-bottom/SrollToSection.jsx';

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
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
        {/* <TabTest/> */}
        {/* <ModalTest/> */}
      {/* <ProfileFinder/> */}
      {/* <SearchAutocomplete/> */}
      {/* <Tictactoe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollTopAndBottom/> */}
      <SrollToSection/>
    </div>
  );
}

export default App;
