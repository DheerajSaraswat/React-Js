import { ThemeProvider } from "./Context/themeContext"
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { useState, useEffect } from "react"

function App() {

  const [themeMode, setThemeMode] = useState('dark')
  
  const darkMode = ()=>setThemeMode('dark')
  const lightMode = ()=>setThemeMode('light')
  
  useEffect(() => {
    const htmlSelect = document.querySelector('html').classList
    htmlSelect.remove("light", "dark");
    htmlSelect.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App