import React from 'react'
import Tabs from './Tabs'


const RandomContent = () => {


    return <div>Content Random</div>
}


const TabTest = () => {
    const tabs = [
        {
            label:'tab 1',
            content : <div>Content tab 1</div>
        },
        {
            label:'tab 2',
            content : <div>Content tab 2</div>
        },
        {
            label:'tab 3',
            content : <RandomContent/>
        }
    ]


  return <Tabs tabsContent={tabs}/>
  
}

export default TabTest