import React, { useState } from 'react'
import MenuList from './MenuList'
import { FaMinus, FaPlus } from "react-icons/fa";


const MenuItem = ({ item }) => {

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
    })
  }
  console.log(displayCurrentChildren)
  return (
    <li>
      <div className="menu-item" style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {
          item && item.children && item.children.length ? (
            <span onClick={() => handleToggleChildren(item.label)}>
              {
                displayCurrentChildren[item.label] ? <FaMinus color='#fff' size={25}/>
                  : <FaPlus color='#fff' size={25}/>
              }
            </span>
          ) : null
        }
      </div>
      {item && item.children && item.children.length && displayCurrentChildren[item.label] > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  )
}

export default MenuItem