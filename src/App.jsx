import Home from "./pages/home/Home";
import { ThemeProvider } from "./components/themeProvider/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
