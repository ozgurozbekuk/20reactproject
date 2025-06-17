import './darktheme.css'
import useLocalStorage from './useLocalStorage'

const DarkTheme = () => {

    const [theme,setTheme] = useLocalStorage('theme','dark')

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)
  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
            <p>Hi There!</p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default DarkTheme