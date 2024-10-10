import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import { theme } from "./styles/Theme";
import ScrollToTopButton from "./components/Base/ScrollToTop/ScrollToTopButton";
import { Router } from "./router/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}

export default App;
