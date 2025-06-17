import './styles.css'
import MenuList from './MenuList'

const TreeView = ({menus = []}) => {
  console.log(menus)
  return (
    <div className='tree-view-container'>
        <MenuList list={menus}/>
    </div>
  )
}

export default TreeView