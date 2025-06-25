import React, { useContext } from 'react'
import { FeatureFlagContext } from './context/FeatureFlagsGlobalState'
import RandomColor from "../random-color/RandomColor.jsx";
import DarkTheme from "../dark-theme/DarkTheme.jsx";
import TicTacToe from "../tic-tac-toe/Tictactoe.jsx";
import Accordion from "../accordion/Accordion.jsx";
import TreeView from "../tree-view-menu/TreeView.jsx";
import menus from '../tree-view-menu/data.js'

const FeatureFlags = () => {

  const { loading, enabledFlags } = useContext(FeatureFlagContext)

  const componentsToRender = [
    {
      key : 'lightAndDarkMode',
      component : <DarkTheme/> 
    },
    {
      key : 'showTicTacToeBoard',
      component : <TicTacToe/> 
    },
    {
      key : 'showAccordion',
      component : <Accordion/> 
    },
    {
      key : 'showRandomColorGenerator',
      component : <RandomColor/> 
    },
    {
      key : 'showTreeView',
      component : <TreeView menus={menus}/> 
    },
    
  ]

  function checkEnabledFlag(getCurrentKey){
    return enabledFlags[getCurrentKey]
  }

    if(loading){
      return <h1>Loading data please wait...</h1>
    }

  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map(componentItem => checkEnabledFlag(componentItem.key) ? componentItem.component : null)
      }
    </div>
  )
}

export default FeatureFlags