import React, { useState } from 'react'
import './customtab.css'

const Tabs = ({tabsContent}) => {

    const [currentTabIndex,setCurrentTabIndex] = useState(0)

    const handleClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
    }


  return (
    <div className='wrapper'>
        <div className="heading">
            {
                tabsContent.map((tabItem,index) => (
                <div className={`tab-item ${currentTabIndex === index ? 'active': ""}`} key={tabItem.label} onClick={()=>handleClick(index)}>
                    <span className='label'>{tabItem.label}</span>
                </div>
            ))}
        </div>
        <div className="content">
            {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
    </div>
  )
}

export default Tabs