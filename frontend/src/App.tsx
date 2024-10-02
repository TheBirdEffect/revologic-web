import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import { Home } from "./pages/Home/Home";
import ScrollToTopButton from "./components/Base/ScrollToTop/ScrollToTopButton";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
