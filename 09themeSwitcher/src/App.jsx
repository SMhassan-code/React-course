import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/themeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card"

function App() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    const htmlClass = document.querySelector('html').classList
    htmlClass.remove("light", "dark")
    htmlClass.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
